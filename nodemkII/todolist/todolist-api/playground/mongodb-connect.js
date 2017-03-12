const { MongoClient, ObjectID } = require('mongodb');
// const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp2', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

  // db.collection('Todos2').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert Todo ', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Tritan',
  //   age: 32,
  //   location: 'Mums Place'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert User');
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
});
