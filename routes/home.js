const express = require("express");
const router = express.Router();


router.get("/", (req,res) =>{
   res.render("index");//Po defaultu samo EJS će tražiti ovaj faj u views folderu
});

module.exports = router;