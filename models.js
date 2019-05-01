const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  database: 'tweets_db',
  dialect: 'postgres',
  define: {
    underscored: true,
    returning: true
  }
});

const Tweets = sequelize.define('tweet',{
  text: Sequelize.STRING,
  hashtag: Sequelize.STRING,
  retweets: Sequelize.INTEGER
})
module.exports = {
  sequelize,
  Tweets
}
//create your model here:
//1. Write a sequelize model for tweets. It should include columns for
// -text (string)
// -hashtag (string)
// -retweets (integer)

//export the models from the file

