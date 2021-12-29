const jwt = require("jwt-simple");
const secret_key = "f4aY3AGFzY7aBM78nlx5opVtlo0v";
const moment = require("moment");

function createToken(data) {
    const payload = {
        idUser:data.idUser,
        firstname:data.firstname,
        lastname:data.lastname,
        email:data.email,
        expire:moment().add(3, 'days').unix()
    }
    return jwt.encode(payload, secret_key);
}

module.exports = {
    createToken
}