const db = require("../models");
const Restaurateur = db.restaurateurs;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    console.log("restaurant bg");
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: '%${title}%'}} : null;
  
    Restaurateur.findAll({ where: condition})
      .then(data => {
          res.send(data);
      })
      .catch(err => {
          res.status(500).send({
              message:
              err.message || "Une erreur lors de la récupération des tutos."
          })
      })
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};