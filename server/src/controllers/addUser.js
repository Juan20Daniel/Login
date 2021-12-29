const controller = {}
const connection = require('../modul/model');
const { createToken } = require('../services/jwt');
controller.createUser = (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    connection.query('SELECT idUser FROM users WHERE email = ?', [email], (err, rows) => {
        if(err) {
            res.status(500).json({message:err});
        } else if(rows.length === 0){
            connection.query('INSERT INTO users VALUES(?,?,?,?,?)', [null,firstname, lastname, email, password], (err, rows) => {
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
                    })
                }
            });
        } else {
            res.status(500).json({message:"The user exists"});
        }
    })
}

module.exports = controller;