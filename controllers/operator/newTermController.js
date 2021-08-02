const mongojs = require ("mongojs");
const db = mongojs("fullapp", ["terms"]);//Ovde sam kao definisao novu kolekciju, nigde pre toga

const newTermController = (req,res) => {
    let user = req.session.user;

    db.terms.insert({
        customer_name:req.body.customer_name,
        customer_lastname:req.body.customer_lastname,
        customer_year : req.body.customer_year,
        spouse_name: req.body.spouse_name,
        spouse_lastname: req.body.spouse_lastname,
        spouse_year: req.body.spouse_year,
        phone:req.body.phone,
        mobile_phone: req.body.mobile_phone,
        adress: req.body.adress,
        date: req.body.date,
        time: req.body.time,
        consultant:req.body.consultant,
        place: req.body.place,
        child_name:req.body.child_name,
        operation:req.body.operation,
        therapy: req.body.therapy,
        note:req.body.note,
        active: true,
        contract_value:0,
        reason:"",
        ulaz: false,
        product: "",
        operator: user.first_name +" "+user.last_name

    }, (err,docs)=>{
         res.redirect("/operator");
    })

}

module.exports = newTermController;