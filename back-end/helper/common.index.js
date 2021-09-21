const jsonwebtoken = require('jsonwebtoken');

generateJwtToken = (_id, _role) => {
    return jsonwebtoken.sign({
        id: _id
    }, process.env.JWT_SECRET_KEY, {
        expiresIn: '1d'
    });
}