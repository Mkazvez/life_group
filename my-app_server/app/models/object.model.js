module.exports = (sequelize, DataTypes) => {
    const Object = sequelize.define(
      'object',
      {
        logo_1: DataTypes.STRING, 
        logo_2: DataTypes.STRING, 
        adres: DataTypes.STRING,
        build:  DataTypes.STRING, 
        qty_etazh:  DataTypes.STRING, 
        sq_all:  DataTypes.STRING,
        q_flats:  DataTypes.STRING,
        wall:  DataTypes.STRING,  
        qty_pod:  DataTypes.STRING, 
        qty_flat:  DataTypes.STRING      },
      {}
    )
    Object.associate = function(models) {
      // associations can be defined here
    }
    return Object
  }
  
