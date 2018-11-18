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
        thumbnail: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },
        userId: {
          type: DataTypes.INTEGER,
          references: {
            model: 'Users',
            key: 'id'
          },
          allowNull: false,
      },
              
    });
     // class methods
    Book.associate = (models) => {
        Book.belongsTo(models.Users, { foreignKey: 'userId' });
        Book.hasMany(models.Ratings, { as: 'Ratings', foreignKey: 'bookId' });
    };    

    return Book;
};


export default Books;