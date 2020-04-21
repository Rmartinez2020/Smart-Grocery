
module.exports = function (sequelize, DataTypes) {
  // Grocery table
  var Grocery = sequelize.define("Grocery", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    items: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  });
  // make the list belong to a user
  Grocery.associate = function (models) {
    Grocery.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Grocery;
};