const express = require("express");
const router = express.Router();



router.use(checkConsultant);//Ovde vršimo proveru. Odnosno omogućavamo samo consultantima da pristupe ovoj stranici, odnosno /consultant


router.get("/", require("../controllers/consultant/consultantController"));
router.get("/term/:id", require("../controllers/consultant/showTermController"));
router.post("/report/:id", require("../controllers/consultant/reportController"));
router.get("/allTerms", require("../controllers/consultant/allTermsController"));


function checkConsultant(req,res){
    let user = req.session.user;
    if(user){
        if(user.role == "consultant"){
            next();

        }else{
            res.redirect("/");
        }

    }else{
        res.redirect("/");
    }

}


module.exports = router;