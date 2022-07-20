module.exports = (sequelize, DataTypes) => {
    const News = sequelize.define(
      'news',
      {
        date: DataTypes.STRING,
        title: DataTypes.STRING,
        news_text: DataTypes.STRING,
        picture: DataTypes.BLOB,
        pathPicture: DataTypes.STRING
      },
      {}
    )
    News.associate = function(models) {
      // associations can be defined here
    }
    return News
  }
  