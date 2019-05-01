//import your models on this line
const { Tweets } = require('./models');
const { Data } = require('./data');

  // 1. Using your models, create new tweets with
  //your the data found in `data.js`. Be sure to have at least one tweet with
  //retweets with an integer greater than 50 (you'll see why)

  //UNCOMMENT THE EXAMPLE TO TEST THE SEED FILE!
  //EXAMPLE:
//   const firstTweet = await Tweets.create({
//     text: 'Hello, is it me you\'re looking for?',
//     hashtag: '#lionel',
//     retweets: 42
//   });
//   console.log('this is firstTweet', firstTweet.dataValues);
// };
const seedingTweets = async () => {
  try{
    const AllTweets = await Tweets.bulkCreate(Data);
    console.log(`${AllTweets.length} people created`);
  }catch(error){
    console.log(console.log(JSON.stringify(error)))
  }
};
const main = async ()  => {
  await seedingTweets();
  process.exit;
}
main();
