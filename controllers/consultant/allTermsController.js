const mongojs = require("mongojs");
const db = mongojs("fullapp", ["terms"]);

const allTermsController = (req,res) => {

    const user = req.session.user;

    db.terms.find({}, (err,terms)=>{
        //err check..
        res.render("consultant/allTerms",{
            terms:terms,
            name:user.first_name + " " +user.last_name
        });
    })

}


module.exports = allTermsController;