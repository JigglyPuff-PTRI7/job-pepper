const express = require('express');
const router = express.Router();
const passport = require("passport");
require('dotenv').config();

const CLIENT_URL = "http://localhost:8080/"
router.get('/login/success', (req,res) => {
  //  console.låog("login succcess called", req)
console.log('req.user exists---', req.sessionStore.sessions)
  if (req.user) {

res.sendStatus(200).json({
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
req.logout()
res.redirect(CLIENT_URL)
})

router.get('/google',passport.authenticate("google", {scope:["profile"]}));


// router.get("/google/callback",passport.authenticate("google",{successRedirect:"http://localhost:8080/dashboard",failureRedirect:"/login"}))


router.get("/google/callback",passport.authenticate("google"), (req,res)=>{res.send("you've reached the callback URI");
})
// })

// router.get("/google/callback",passport.authenticate("google",{failureRedirect:"/login"},
// (req,res)=>{res.redirect('http://localhost:8000/dashboard' + req.user) }
// ))


module.exports = router;