const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");//加密


//註冊新會員

router.post("/register", async (req, res) => {
        try {
          // check if user already exists
          let user = await User.findOne({ email: req.body.email });
          if (user) {
            return res.send({
              success: false,
              message: "User already exists",
            });
          }
      
          // hash password
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(req.body.password, salt);
          req.body.password = hashedPassword;
          // save the user
          const newUser = new User(req.body);
          await newUser.save();
          res.send({
            message: "User created successfully",
            data: null,
            success: true,
          });
        } catch (error) {
          res.send({
            message: error.message,
            success: false,
          });
        }
      });


//登入會員 
router.post("/login", async (req, res) => {
        try {
          // check if user exists
          let user = await User.findOne({ email: req.body.email });
          if (!user) {
            return res.send({
              success: false,
              message: "User does not exist",
            });
          }
      
          // check if password is correct
          const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
          );
          if (!validPassword) {
            return res.send({
              success: false,
              message: "Invalid password",
            });
          }
          res.send({
            message: "User logged in successfully",
            data: token,
            success: true,
          });
        } catch (error) {
          res.send({
            message: error.message,
            success: false,
          });
        }
      });
      module.exports = router;