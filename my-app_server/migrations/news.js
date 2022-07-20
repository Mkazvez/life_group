'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Newss', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
	date: {
		allowNull: false,
		type: DataTypes.STRING
	},	
	title: {
		allowNull: false,
		type:DataTypes.STRING
	},	
	news_text: {
		allowNull: false,
		type:DataTypes.STRING
	},
	picture: {
		allowNull: false,
		type:DataTypes.BLOB
	},
    pathPicture: {
		allowNull: false,
		type:DataTypes.STRING
    },
	createdAt: {
        allowNull: false,
        type: Sequelize.DATE
    },
    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('Newss')
  }
}
