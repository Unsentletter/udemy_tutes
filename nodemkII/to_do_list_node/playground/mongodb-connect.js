const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoAppUdemy', (err, db) => {
  if (err) {
    return console.log('unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB Server');
  //
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false,
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert Todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })

  db.collection('Users').insertOne({
    name: 'TRistan',
    age: 32,
    location: 'Mums house',
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert User');
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  })

  db.close();
});
