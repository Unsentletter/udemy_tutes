const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoAppUdemy', (err, db) => {
  if (err) {
    return console.log('unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB Server');

  db.collection('Users').find({name: 'Trit'}).toArray().then((name) => {
    console.log(`Users:`);
    console.log(JSON.stringify(name, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos');
  })

  // db.close();
});
