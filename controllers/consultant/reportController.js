const mongojs = require("mongojs");
const db = mongojs("fullapp",["terms"]);

const reportController = (req,res) => {
    const id = req.params.id;
    db.terms.update({_id:mongojs.ObjectID(id)}, {
       $set:{
           active:false
       }
    }, (err,docs)=>{
        //uvek proveravaj error
        res.redirect("/consultant");
        
    })
}

module.exports = reportController;
