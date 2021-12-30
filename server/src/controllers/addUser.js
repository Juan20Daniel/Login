const controller = {}
const connection = require('../modul/model');
const { createToken } = require('../services/jwt');
const bcrypt = require('bcryptjs');

controller.createUser = async (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    let passwordHash = await bcrypt.hash(password, 10);
    connection.query('SELECT idUser FROM users WHERE email = ?', [email], (err, rows) => {
        if(err) {
            res.status(500).json({message:err});
        } else if(rows.length === 0){
            connection.query('INSERT INTO users VALUES(?,?,?,?,?)', [null,firstname, lastname, email, passwordHash], (err, rows) => {
                if(err) {
                    res.status(500).json({message:err});
                } else {
                    connection.query("SELECT * FROM users WHERE email = ?", [email], (err, rows) => {
                        if(err) {
                            res.status(500).json({message:err});
                        } else {
                            res.status(200).json({
                                accessToken:createToken(rows[0])
                            });
                        }
                    });
                }
            });
        } else {
            res.status(500).json({message:"The user exists"});
        }
    });
}

module.exports = controller;