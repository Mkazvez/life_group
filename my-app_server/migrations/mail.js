'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Mails', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
	Name: {
		allowNull: false,
		type: DataTypes.STRING
	},	
	Email: {
		allowNull: false,
		type:DataTypes.STRING
	},	
	Phone: {
		allowNull: false,
		type:DataTypes.STRING
	},
	Message: {
		allowNull: false,
		type:DataTypes.STRING
	},
  Ip: {
		allowNull: false,
		type:DataTypes.STRING
  },
  Adres: {
		allowNull: false,
		type:DataTypes.STRING
  },
  IdAdres: {
		allowNull: false,
		type:DataTypes.INTEGER
  },
  Flat: {
		allowNull: false,
		type:DataTypes.STRING
  },
  FileFull: {		allowNull: false,
		type:DataTypes.STRING
  },
  FileEmail: {		allowNull: false,
		type:DataTypes.BLOB
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
    return queryInterface.dropTable('Mails')
  }
}
