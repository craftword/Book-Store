"use strict";

const Ratings = (sequelize, DataTypes) => {
    const Ratings = sequelize.define("Ratings", {
      userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      bookId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      rating: {
        type: DataTypes.STRING,
        allowNull: false,
    },
              
    });
     // class methods
      Ratings.associate = (models) => {
      Ratings.belongsTo(models.Books, { foreignKey: 'bookId' });
  };    

    return Ratings;
};


export default Ratings;