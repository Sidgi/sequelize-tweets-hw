//import your models on this line
const { Tweets, sequelize,Op } = require('./models');
//require sequlize and the Operator value. Check the docs, if you
//want to check the syntax for that.


const runQueries = async () =>{
  try{
    // 1. Write a sequelize query to find all the tweets.
    const aTweets = await Tweets.findAll();
    console.log(JSON.stringify(aTweets,null,"\t"))

//2. Write a query to find the tweet with a hashtag: "#react"

const aTweets1 = await Tweets.findAll({
  where:{
    hashtag:"#react"
  }
});
    console.log(JSON.stringify(aTweets1,null,"\t"))

//3. Write a query to find the tweet with more than 50 retweets.

const aTweets2 = await Tweets.findAll({
  where: {
    retweets: {
      [Op.gt]:50
    } 
  }
});
    console.log(JSON.stringify(aTweets2,null,"\t")) 

//4. Write a query to find the tweet with an id of 3
const aTweets3 = await Tweets.findAll({
  where:{
    id:'3'
  }
})
  console.log(JSON.stringify(aTweets3,null,4))
//5. Write a query to delete the tweet with an id of 3

const deleteATweet = await Tweets.destroy({
  where:{
    id:'3'
  }
});
//BONUS SECTION
//6. Write a query to create a new tweet with any data you want

const createTweet = await Tweets.create({
  text:'My new tweet',
  hashtag:'#helloWorld',
  retweets:222
})
.then(newTweet=>console.log(JSON.stringify(newTweet,null,4)))
//7. Write a query to update the hashtag of the tweet you just created
// with #sequelize
const newData = {
  text:'Not old tweet',
  hashtag: 'hello new world',
  retweets:777
}
const updateTweet = await Tweets.update(newData,{
  where:{
    text: 'My new tweet'
  }
})
.then(updateTweet=>console.log(JSON.stringify(updateTweet,null,4)))
//8. Write a query to update the retweets where the text includes Brad Pitt

const updateTweet = await Tweets.update(
  {
    retweets: 747
  },
  {
  where: {
    text: {
      [Op.like]: "%Brad Pitt%"
    }
  }
})

}catch(error){
  console.log(JSON.stringify(error));
}
}
const run = async ()=>{
  await runQueries();
  process.exit();
}
run();