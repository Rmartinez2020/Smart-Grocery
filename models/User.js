
module.exports = function (sequelize, DataTypes) {
// User table
  var User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  // user has grocerylists
  User.associate = function(models) {
    User.hasMany(models.Grocery, {
      onDelete: "cascade"
    });
  };
  return User;
};