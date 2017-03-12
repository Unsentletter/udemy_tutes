const { MongoClient, ObjectID } = require('mongodb');
// const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp2', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

  // db.collection('Todos2').findOneAndUpdate({
  //   _id: new ObjectID(`58881835e54d36342198b344`)
  // }, {
  //   $set: {
  //     completed: false
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });
  //
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID(`588819416c10b93429749002`)
  }, {
    $set: {
      name: "I changed this one"
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});
