const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

router.post('/',[
    body('email' , 'Enter valid Email').isEmail(),
    body('name' , 'Name must be atleast 5 character long').isLength({ min: 5 }),
    body('password' , 'Password must be atleast 8 character long').isLength({ min: 8 }),
],(req, res)=>{ 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
      }).then(user => res.json(user))
      .catch(err=>{
        res.json({error : "Please Enter unique value for email" , message : err.message})
      })
} )


module.exports = router ;