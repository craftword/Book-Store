"use strict";

const Users = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                args: true,
                msg: 'Username taken! Please enter a new username.'
              },
            validate: {
                notEmpty: true,
            },   
                         
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },   
            
        },
        fullname: {            
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            isEmail: true,
            validate: {
                notEmpty: true,
            },    
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
       
    });
     // class methods
     Users.associate = (models) => {
       Users.hasMany(models.Books, { as: 'Books', foreignKey: 'userId' });
  };    

    return Users;
};


export default Users;