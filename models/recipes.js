module.exports = function(sequelize, DataTypes) {
    var Recipes = sequelize.define("Recipe", {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      id2: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      minutes: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      contributor_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      submitted: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      tags: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      nutrition: {
        type: DataTypes.STRING,
        allowNull: false
      },
      n_steps: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      steps: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      ingredients: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      n_ingredients: {
          type:DataTypes.INTEGER,
          allowNull: false
      }
    });
    return Recipes;
  };