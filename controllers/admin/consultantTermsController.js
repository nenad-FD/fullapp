const mongojs = require("mongojs");
const db = mongojs("fullapp", ["terms"]);

const consultantTermsController = (req,res) =>{
    let name = req.params.name;
    let user = req.session.user;
    db.terms.find({consultant:name}, (err,terms)=>{
        console.log(terms);
        res.render("admin/consultantTerms", {
            terms:terms,
            name:name
        });
    })

}

module.exports = consultantTermsController;