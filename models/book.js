"use strict";

const Books = (sequelize, DataTypes) => {
    const Book = sequelize.define("Books", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: 'Book title must be unique.'
        },
      },
        description: {
            
            type: DataTypes.TEXT,
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },
        dateOfPublication: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
              
    });
     // class methods
      Books.associate = (models) => {
      Books.belongsTo(models.Users, { foreignKey: 'userId' });
      Books.hasMany(models.Ratings, { as: 'Ratings', foreignKey: 'bookId' });
  };    

    return Books;
};


export default Books;