const express = require("express");
const router = express.Router();


router.use("/", require("./home"));//Ovde imamo formu, gde kada unesemo podatke nas vodi ka /login
router.use("/login", require("../controllers/loginController"));//Ovo nam je neka polazna tačka gde proveravamo da li nam je user admin ili ima neku drugu ulogu, proverava role
router.use("/admin", require("./admin"));
router.use("/operator", require("./operator"));
router.use("/logout", require("./logout"));
router.use("/consultant", require("./consultant"));

module.exports = router;