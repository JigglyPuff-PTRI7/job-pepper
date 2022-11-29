const express = require('express');
const router = express.Router();
const passport = require("passport");
require('dotenv').config();

const CLIENT_URL = "http://localhost:8080/Login"
router.get('/login/success', (req,res) => {

  if (req.user) {
//console.log('req.user exists---', req.user.id)
res.status(200).json({
    success:true,
    message:"successful",
    user:req.user,
  //  cookies:req.cookies
  })
   }

})
router.get('/login/failed', (req,res) => {
  console.log("error")
  res.sendStatus(401).json({
    success:false,
    message:"failure",
  })
})

router.get("/logout",(req,res)=>{
  console.log("logout")

 req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect(CLIENT_URL);
  });
})

router.get('/google',passport.authenticate("google", {scope:["profile"]}));

router.get("/google/callback",passport.authenticate("google"), (req,res)=>{
  //console.log("req.user",req.user)
  //res.send(req.user);
  res.redirect('http://localhost:8080/dashboard')
})



module.exports = router;