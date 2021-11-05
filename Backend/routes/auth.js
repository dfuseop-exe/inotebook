const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const JWT_SECRIT = "sushantshinde$2418"

//Route - 1 : Create a User using: POST "/api/auth/createuser". No login required

router.post("/createuser",[
    body("email", "Enter valid Email").isEmail(),
    body("name", "Name must be atleast 5 character long").isLength({ min: 5 }),
    body("password", "Password must be atleast 8 character long").isLength({
      min: 8,
    }),
  ],
  async (req, res) => {
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check whether the user with this email exists already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email already exists" });
      }

      //getsalt will generate salt 
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password , salt)
      //Create New User

      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });

      const data = {
        user : user.id,
      }

      const authtoken = jwt.sign(data , JWT_SECRIT);
      console.log(authtoken);
      res.json({authtoken})

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server Error");
    }
  }
);

//Route - 2 : Authenticate a User using: POST "/api/auth/login". No login required

router.post("/login",[ body("email", "Enter valid Email").isEmail(),
body("password", "Password is can not be blank").exists()
],async (req, res) => {
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email , password} = req.body ;

    try {
      //findone is used to find in db
      let user = await User.findOne({email});

      if(!user){
        return res.status(400).json({error : "Try to Login with correct credentials"})
      }

      const passwordcompare  = await bcrypt.compare(password , user.password);
      if(!passwordcompare){
        return res.status(400).json({error : "Try to Login with correct credentials"})
      }

      const data = {
        user : user.id,
      }

        //sign method is used to create signature in jwt which consist data + secret code
      const authtoken = jwt.sign(data , JWT_SECRIT);
      res.json({authtoken});

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server Error");
    }

})

//Route - 3 :get Loggedin User details using: POST "/api/auth/getuser". login required

router.post("/getuser",async (req, res) => {
try {
  userId = "todo"
  const user = await User.findById(userId).select("-password")
} catch (error) {
  console.error(error.message);
  res.status(500).send("Internal server Error");
}})

module.exports = router;

