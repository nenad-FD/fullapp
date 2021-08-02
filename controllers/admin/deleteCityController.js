const mongojs = require("mongojs");
const db = mongojs("fullapp", ["cities"]);

const deleteCityController = (req,res) =>{
    let cityId = req.params.cityId;
    db.cities.remove({_id:mongojs.ObjectID(cityId)}, (err,docs)=>{
        res.send("Ok");
    })
    console.log("ok");


}

module.exports = deleteCityController;