module.exports = app =>{


const tutorials = require("../controllers/tutorial.controller.js");
const restaurateurs = require("../controllers/restaurateurs.controller.js");

var router = require("express").Router();

router.get("/a", tutorials.findAll);

router.get("/b", restaurateurs.findAll);

    app.use('', router);
}