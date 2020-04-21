module.exports = function (sequelize, DataTypes) {
  var Recipes = sequelize.define("Recipe", {
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    minutes: {
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
      allowNull: true
    },
    // eslint-disable-next-line camelcase
    n_steps: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    steps: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ingredients: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    // eslint-disable-next-line camelcase
    n_ingredients: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  });
  return Recipes;
};