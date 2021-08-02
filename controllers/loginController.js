const mongojs = require("mongojs");
const db = mongojs("fullapp", ["users"]);

const loginController = (req,res) => {
   //Preuzeti podatke
   let nameForm = req.body.name;
   let passwordForm = req.body.password;
   


   db.users.find({first_name:nameForm, password:passwordForm}, (err, docs)=>{//docs to nam je array sa pronadjenim userima, pa proveravamo da li je samo jedan kao sto i moze
       if(err){
           console.log("greska");
           res.redirect("/");
       }else{
       
           if(docs.length === 1){
               //pronađen korisnik
                   let user = docs[0];

                   req.session.user = user; //Mi smo u sesiju dodali da pod imenom user imamo ovog naseg usera što smo preuzeli iz forme. To ćemo sada proveriti  u /admin da li postoji taj objekat unutar requesta
                   if(user.role == "admin"){
                       res.redirect("/admin")
                   }else if(user.role == "operator"){
                       res.redirect("/operator")
                   }else if(user.role == "consultant"){
                       res.redirect("/consultant");
                   }else{
                       res.redirect("/");
                       console.log("greska");
                   }
           }else{
               //podaci nisu tačni
               res.redirect("/");
               console.log("Podaci nisu tačni");

           }
        }
   })
}


module.exports = loginController;