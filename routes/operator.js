const express = require("express");
const router = express.Router();

router.use(checkOperator);

router.get("/", require("../controllers/operator/operatorController"));
router.post("/newTerm", require("../controllers/operator/newTermController"));



function checkOperator(req,res){
    let user = req.session.user;
    if(user){
        if(user.role == "operator"){
            next();

        }else{
            res.redirect("/");
        }

    }else{
        res.redirect("/");
    }

}



module.exports = router;