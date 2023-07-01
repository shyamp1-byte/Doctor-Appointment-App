// Here i want to test JWT Token and how to provide token and validate the token
// JWT means (Javascript web token);
// we need to set the expiry (30 min or 5 min etc)
// once the token is expired , it will ask user need to re-login 

const jwt = require('jsonwebtoken');


const privateKey = "bjgfvjjnwt76ge87gq65e6q627he6";
const tokenbody = { UID: "001", firstName: "Shyam", email: "Shamie123@gmail.com" };

// const token=jwt.sign(tokenbody,privateKey,{ expiresIn: '60s' });
const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVSUQiOiIwMDEiLCJmaXJzdE5hbWUiOiJTaHlhbSIsImVtYWlsIjoiU2hhbWllMTIzQGdtYWlsLmNvbSIsImlhdCI6MTY4ODE4ODM1NCwiZXhwIjoxNjg4MTg4NDE0fQ.pawej6nvZqpedxyTrzd2fSaxLhXs6o108i4caCulj7M"


const decodedToken = jwt.verify(token, privateKey);

console.log(privateKey);
console.log(tokenbody);
console.log(token);
console.log(decodedToken);

 // sample token
//  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
//  eyJVSUQiOiIwMDEiLCJmaXJzdE5hbWUiOiJTaHlhbSIsImVtYWlsIjoiU2hhbWllMTIzQGdtYWlsLmNvbSIsImlhdCI6MTY4ODE4Nzg0MH0.
//  hIYCas9p0cCuPe0t9J9XqQQmzjbBcrn2LwDdJTJGdpQ