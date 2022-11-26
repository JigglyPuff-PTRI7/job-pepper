const express = require('express');
const router = express.Router();
const passport = require("passport");
require('dotenv').config();

const CLIENT_URL = "http://localhost:8080/"
router.get('/login/success', (req,res) => {
    console.log("login success")
  if (req.user) {
res.sendStatus(200).json({
    success:true,
    message:"successful",
    user:req.user,
    cookies:req.cookies
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

router.get('/google',passport.authenticate("google", {scope:["profile"]}),(req,res)=> res.sendStatus(200));

// router.get("/google/callback",passport.authenticate("google",{successRedirect:"http://localhost:8080/dashboard",failureRedirect:"/login"}))
// })

router.get("/google/callback",passport.authenticate("google",{failureRedirect:"/login"},
(req,res)=>{res.redirect('/dashboard' + req.user) }
))
})

module.exports = router;