const jwt = require("jsonwebtoken");

const generateToken = (data) => {
  return jwt.sign(data, process.env.TOKEN_SECRET, {
    algorithm: "HS256",
    expiresIn: "90d",
  });
};

const verifyMiddleware = (req, res, next) => {
  const authHeader = rea.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!authHeader) res.status(401).send({ detail: "User not authenticated." });

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    console.log(err);
    if (err) res.send(403);

    req.user = user;

    next();
  });
};

module.exports = { generateToken, verifyMiddleware };
