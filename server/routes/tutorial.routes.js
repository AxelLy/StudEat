module.exports = app =>{


const tutorials = require("../controllers/tutorial.controller.js");
const connexion = require("../controllers/restaurateurs.controller.js");

var router = require("express").Router();

router.get("/a", tutorials.findAll);

router.get("/b", connexion.findAll);

    app.use('', router);
}