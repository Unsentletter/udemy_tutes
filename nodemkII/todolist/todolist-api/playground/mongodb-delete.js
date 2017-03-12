const { MongoClient, ObjectID } = require('mongodb');
// const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp2', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

  // DELETE MANY
    // db.collection('Todos2').deleteMany({text: 'Eat Lunch'}).then((result) => {
    //   console.log(result);
    // });
  // DELETE ONE
    // db.collection('Todos2').deleteOne({text: 'Eat Lunch'}).then((result) => {
    //   console.log(result);
    // });
  //FIND ONE AND DELETE
    // db.collection('Todos2').findOneAndDelete({completed: false}).then((result) => {
    //   console.log(result);
    // });

  // db.collection('Users').deleteMany({name: "Tritan"}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({_id: new ObjectID(`588819d269b334342d18bd85`)}).then((result) => {
    console.log(result);
  })

  // db.close();
});
