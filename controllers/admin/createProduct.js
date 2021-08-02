const mongojs = require("mongojs");
const db = mongojs("fullapp", ["users","products"]);


const createProduct = (req,res) =>{
    const name = req.body.product;
    const price = req.body.price;

    db.products.insert({name:name, price:price}, (err,docs)=>{
        //check error
        res.redirect("/admin");

    })


}

module.exports = createProduct;