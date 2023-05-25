const db = require("../db/connection");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getUsers = async (req, res) => {
  console.log("test");
  try {
    const users = db.users.findAll({
      attributes: ["id", "name", "email"],
    });
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

const Register = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  if (password != confirmPassword) {
    return res.status(400).json({ msg: "Password doesn't match" }); //jika password dan confirmPassword tidak cocok jalankan fungsi ini
  }
  const salt = await bcrypt.genSalt(); // jalankan fungsi ini jika password match
  const hashPassword = await bcrypt.hash(password, salt); //jalankan fungsi ini untuk meng-hash password
  try {
    await db.users.create({
      first_name: name,
      email: email,
      password: hashPassword,
      role: "user",
    });
    res.json({ msg: "Register Success" });
  } catch (error) {
    console.error(error);
  }
};

const Login = async (req, res) => {
  console.log(req.body.email);
  try {
    const user = await db.users.findAll({
      where: {
        email: req.body.email,
      },
    });
    console.log(user[0].id_user);
    const match = await bcrypt.compare(req.body.password, user[0].password);
    if (!match) return res.status(400).json({ msg: "Sorry, Wrong Password" });
    const userId = user[0].id_user;
    const name = user[0].name;
    const email = user[0].email;
    const accessToken = jwt.sign(
      { userId, name, email },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "30s",
      }
    );
    console.log(accessToken, "accessToken");
    const refreshToken = jwt.sign(
      { userId, name, email },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );
    console.log(refreshToken, "refreshToken");
    await db.users.update(
      { refresh_token: refreshToken },
      {
        where: {
          id_user: userId,
        },
      }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      // secure: true  //https only (keamanan)
    });
    res.json({ accessToken }); //mengirim access token ke client.
  } catch (error) {
    res.status(404).json({ msg: error });
  }
};

const Logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204); //no containt
  const user = await db.users.findAll({
    where: {
      refresh_token: refreshToken,
    },
  });
  if (!user[0]) return res.sendStatus(204); //no containt
  const userId = user[0].id_user;
  await db.users.update(
    { refresh_token: null },
    {
      //set refToken jadi null
      where: {
        id_user: userId,
      },
    }
  );
  res.clearCookie("refreshToken");
  return res.sendStatus(200); //OK
};

module.exports = {
  getUsers,
  Login,
  Register,
  Logout,
};
