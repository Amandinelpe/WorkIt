/* const jwt = require("jsonwebtoken");
 */
const authenticationConsultant = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) {
    res.status(401).send({ message: "Unauthorized" });
  }
  /*   const data = jwt.verify(token, process.env.JWT_AUTH_SECRET);
   */
  /*   console.log(data);
   */
};

module.exports = authenticationConsultant;
