'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Ratings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bookId: {
          type: Sequelize.INTEGER,
          references: {
              model: "Books",
              key: "id",
              as: "bookId",
          },
      },
      userId: {
          type: Sequelize.INTEGER,
          onDelete: "CASCADE",
          references: {
              model: "Users",
              key: "id",
              as: "userId",
          },
      },
      rating: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Ratings');
  }
};