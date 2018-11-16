"use strict";

const User = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                args: true,
                msg: 'Username taken! Please enter a new username.'
              },
                         
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },
        fullname: {
            
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            isEmail: true, 
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
              
    });
     // class methods
     User.associate = (models) => {
       User.hasMany(models.Book, { as: 'Book', foreignKey: 'user_id' });
  };    

    return User;
};


export default User;