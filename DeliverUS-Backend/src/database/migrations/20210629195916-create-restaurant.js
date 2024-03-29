module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Restaurants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // TODO: Include the rest of the fields of the Restaurants table
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      address: {
        type: Sequelize.STRING
      },
      postalCode:{
        allowNull: false,
        type: Sequelize.STRING
      },
      url:{
        type: Sequelize.STRING
      },
      shippingCosts:{
        allowNull:false,
        type: Sequelize.DOUBLE
      },
      averageServiceMinutes:{
        type: Sequelize.DOUBLE
      },
      email:{
        type: Sequelize.STRING
      },
      phone:{
        type: Sequelize.STRING
      },
      logo:{
        type: Sequelize.STRING
      },
      heroImage:{
        type: Sequelize.STRING
      },
      status:{
        allowNull: false,
        type: Sequelize.ENUM,
        values: [
          'online',
          'offline',
          'closed',
          'temporarily closed'
        ]
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },

      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Users'
          },
          key: 'id'
        }
      },
      restaurantCategoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'RestaurantCategories'
          },
          key: 'id'
        }
      }


    })


  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Restaurants')
  }
}
