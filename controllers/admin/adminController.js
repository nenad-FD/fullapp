const mongojs = require("mongojs");
const db = mongojs("fullapp", ["users", "cities", "products"]);

const adminController = (req,res) => {
    let user = req.session.user;//Uzmemo usera iz naše sesije, da li sesija moze da ima samo jednog usera?
    db.users.find({},(err,users)=>{
        db.products.find({}, (err,products)=>{
            db.cities.find({}, (err,cities)=>{
                // U ovoj liniji koda imamo sve nase usere, proizvode i gradove
                let operators = users.filter(user=>user.role=="operator");
                let consultants = users.filter(user=>user.role=="consultant");
                res.render("admin/adminDashboard",{//Ovde želimo da renderujemo neku našu stranicu. Unutar views cemo napraviti admin. Ovo je putanja unutar views foldera
                    name:user.first_name,//Ovde šaljemo first_name samog toga koji se logovao
                    cities:cities,
                    products:products,
                    operators:operators,
                    consultants:consultants,
                }); 
            })
        })
    })
    
}

module.exports = adminController;