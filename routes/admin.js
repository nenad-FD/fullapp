const express = require("express");
const router = express.Router();

router.use(checkAdmin);

router.get("/", require("../controllers/admin/adminController"));

router.get("/create", (req,res)=>{
    res.render("admin/adminCreateForm");//Ovde verovatno nije bilo potrebe da bilo šta šaljemo kontroleru, jer samo renderujemo stranI
})

router.get("/create/city", (req,res)=>{
    res.render("admin/createCity");

})

router.get("/create/product", (req,res)=>{
    res.render("admin/createProduct");
})

router.get("/delete/user/:userId", require("../controllers/admin/deleteUserController"));
router.get("/delete/product/:productId", require("../controllers/admin/deleteProductController"));
router.get("/delete/city/:cityId", require("../controllers/admin/deleteCityController"));

router.post("/create/save", require("../controllers/admin/saveController"));
router.post("/create/city/save", require("../controllers/admin/createCity"));
router.post("/create/product/save", require("../controllers/admin/createProduct"));

//Savetnik
router.get("/consultant/terms/:name", require("../controllers/admin/consultantTermsController"));

function checkAdmin (req,res,next){
    let user = req.session.user;
    //Prvo testiramo da li se neko uopšte logovao. Ako nije ovo će biti undefined, i vraćamo na login page. A u if može npr biti operater, ali i on ne bi trebalo da ima mogućnost da pristupa kao admin
    if(user){
      if(user.role=="admin"){
        next(); //prosledjivanje našem chainu... (da ne bi došlo do blokiranja)
      }else{
          res.redirect("/");
      }
    }else{
        res.redirect("/");
    }

}




module.exports = router;