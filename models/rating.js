'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rating = sequelize.define('Rating', {
    rating: DataTypes.STRING
  }, {});
  Rating.associate = function(models) {
    // associations can be defined here
  };
  return Rating;
};