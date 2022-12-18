const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { signout, signup, signin, isSignedIn } = require("../controllers/authentications");

router.post(
  "/signup",
  [
    check("name", "name should be atlest 3 char").isLength({ min: 3 }),
    check("email", "Email is required").isEmail(),
    check("password", "password should be atleast 8 char").isLength({ min: 8 }),
  ],
  signup
);

router.post(
  "/signin",
  [
    check("email", "Email is required").isEmail(),
    check("password", "password should be atleast 8 char").isLength({ min: 8 }),
  ],
  signin
);

router.get("/signout", signout);

router.get("/issignedin", isSignedIn, (req, res) =>{
  res.json(req.auth);
})


module.exports = router;
