const jwt = require("jsonwebtoken");

// decode, verify, generate

const value = {
    name: "Pranjal",
    accountNumber: 123123123
}

const token = jwt.sign(value, "secret"); // generate token
console.log(token);

// this token has been generated using this secret, and hence this token can only be verified this secret


const check = jwt.verify(token, "secret");
console.log(check);
