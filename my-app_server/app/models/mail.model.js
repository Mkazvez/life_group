module.exports = (sequelize, Sequelize) => {
    const Mail = sequelize.define("mail", {
      Name: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      Phone: {
        type: Sequelize.STRING
      },
      Message: {
        type: Sequelize.STRING
      },
      Ip: {
        type: Sequelize.STRING
      },
      Adres: {
        type: Sequelize.STRING
      },
      IdAdres: {
        type: Sequelize.INTEGER
      },
      Flat: {
        type: Sequelize.STRING
      },
      FileFull: {
        type: Sequelize.STRING
      },
      FileEmail: {
        type: Sequelize.BLOB
      }
    });
  
    return Mail;
  };