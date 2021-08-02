const mongojs = require("mongojs");
const db = mongojs("fullapp", ["terms"]);


const showTermController = (req,res) => {
    let user = req.session.user;
    let id = req.params.id;

    db.terms.find({_id:mongojs.ObjectID(id)}, (err, term)=>{
        res.render("consultant/showTerm", {
            name: user.first_name,
            term: term[0]
        });
    });

}

module.exports = showTermController;