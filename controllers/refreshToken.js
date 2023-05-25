const Users = require("../models/users");
const jwt = require("jsonwebtoken");

const refreshToken = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.sendStatus(401); //jika tidak ada refreshToken result 401 - unauthorized
        const user = await Users.findAll({
            where: {
                refresh_token : refreshToken
            }
        });
        if (!user[0]) return res.sendStatus(403); //Jika tidak ada kecocokan refresh_token yg dikirimkan oleh client pada database jalankan fungsi ini
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decode) => { // validasi refresh_token jika cocok jalankan fungsi ini
            if (err) return res.sendStatus(403); 
            const userId = user[0].id;
            const name = user[0].name;
            const email = user[0].email;
            const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET,{ // membuat access token baru
                expiresIn: '20s'
            }); 
            res.json({ accessToken });
        }); 
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    refreshToken
}