'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Objects', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
	logo_1: {
		allowNull: false,
		type: DataTypes.STRING
	},	
	logo_2: {
		allowNull: false,
		type:DataTypes.STRING
	},	
	adres: {
		allowNull: false,
		type:DataTypes.STRING
	},
	build: {
		allowNull: false,
		type:DataTypes.STRING
	},
	qty_etazh: {
		allowNull: false,
		type:DataTypes.STRING
	},
	sq_all: {
		allowNull: false,
		type:DataTypes.STRING
	},
	q_flats: {
		allowNull: false,
		type:DataTypes.STRING
	},
	wall: {
		allowNull: false,
		type:DataTypes.STRING
	},
	qty_pod: {
		allowNull: false,
		type:DataTypes.STRING
	},
	qty_flat: {
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
    return queryInterface.dropTable('Objects')
  }
}
