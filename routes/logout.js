const express = require("express");
const router = express.Router();


router.get("/", (req,res)=>{
    req.session.destroy((err)=>{//Ovako se vrši logout uz pomoć sesije
        res.redirect("/");
    });
})

module.exports = router;