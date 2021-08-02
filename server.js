const express = require("express");
const app = express();
const routes = require("./routes");
const session = require("express-session");

const HALF_DAY = 1000 * 60 *60 *12;
const {
    PORT = 3000,
    NODE_ENV = "development",
    SESS_NAME = "sid",
    SESS_SECRET = "fullapp",
    SESS_LIFETIME = HALF_DAY
} = process.env;//Gde god da se pokrene naša aplikacija, u kom god envirementu , pogledaćemo da li postoje ovakve neke varijable, ako postoje onda mi želimo da npr PORT varijablu uzmemo
//iz process.env, a ako takve nema onda je po defaultu 3000
const IN_PROD = NODE_ENV == "production"; //To kada prebacimo naš projekat na pravi server pa će naša NODE_ENV biti production, pa ćemo imati true

app.use(express.urlencoded({extended:false})) //req.body
app.use(express.json());//Ovo je da možemo da šaljemo nešto putem našeg AJAXA
app.use(express.static(__dirname +"/public"));//prosledjivanje static fajlova

app.use(session({//Sesija će nam omogućiti da na request objectu imamo object session, gde možemo da dodamo nesto i to je vidljivo u celoj nasoj aplikaciji
     name:SESS_NAME,
     resave:false,
     saveUninitialized:false,
     secret:SESS_SECRET,
     cookie:{
         maxAge: SESS_LIFETIME, 
         sameSite:true,
         secure:IN_PROD
     }
}))


app.set("view engine", "ejs"); //za korišćenje EJS-a

app.use("/", routes);

app.listen(3000, function(){
    console.log("Listening on port 3000");
})
