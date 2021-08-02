const mongojs = require("mongojs");
const db = mongojs("fullapp", ["users", "cities"]);

const createCity = (req,res)=>{
    let name = req.body.city;
    let zip = req.body.postal_code;

    db.cities.insert({name:name, zip:zip}, (err,docs)=>{
             //check for error

             res.redirect("/admin");
    })

}

module.exports = createCity;