'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define('Ingredient', {
    amount: DataTypes.DECIMAL,
    measurementUnitId: DataTypes.INTEGER,
    foodStuff: DataTypes.STRING,
    recipeId: DataTypes.INTEGER
  }, {});
  Ingredient.associate = function(models) {
    Ingredients.belongsTo( models.Recipe, { foreignKey: 'recipeId' } )
  };
  return Ingredient;
};