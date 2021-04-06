module.exports = (sequelize, Sequelize) => {
    const Connexion = sequelize.define("restaurateur", {
      nom: {
        type: Sequelize.STRING
      },
      prenom: {
        type: Sequelize.STRING
      },
      mail: {
        type: Sequelize.STRING
      },
      mdp: {
        type: Sequelize.STRING
      },
      tel: {
        type: Sequelize.INTEGER
      },
      rib: {
        type: Sequelize.STRING
      }
    });
  
    return Connexion;
  };