/* eslint-disable linebreak-style */
module.exports = function (sequelize, DataTypes) {
  // Grocery table
  var Groceries = sequelize.define("Groceries", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    items: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  });
  //make the list belong to a user
  Groceries.associate = function (models) {
    Groceries.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Groceries;
};