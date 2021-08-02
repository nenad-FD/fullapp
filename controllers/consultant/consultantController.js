const mongojs = require("mongojs");
const db = mongojs("fullapp", ["terms"]);

const consultantController = (req,res) => {
   let user = req.session.user;

   db.terms.find({consultant:user.first_name+" "+user.last_name, active:true}, (err,terms)=>{
      res.render("consultant/index", {
         name:user.first_name,
         terms:terms
      });
   })
}


module.exports = consultantController;