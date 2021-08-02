const mongojs = require("mongojs");
const db = mongojs("fullapp", ["users", "cities", "products"]);

const operatorController = (req,res)=>{
    //Usera ćemo zatražiti iz same sesije
    let user = req.session.user;

    db.cities.find({}, (err,cities)=>{
           db.users.find({role:"consultant"}, (err,consultants)=>{
               db.terms.find({operator:user.first_name +" "+user.last_name}, (err,terms)=>{//Izdvojimo termine samo u tom trenutku logovanog operatora
                res.render("operator/index", {
                    name:user.first_name,
                    consultants: consultants,
                    cities:cities,
                    numOfTerms: terms.length
                });

               })

           })
    });
     
}


module.exports = operatorController;