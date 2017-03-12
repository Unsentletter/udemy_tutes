const { SHA256 } = require('crypto-js');
const bcrypt = require('bcryptjs');

var password = '123abc!';
//
// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });
//
var hashedPassword = '$2a$10$UYTlyxzzB08H9WCBr76KeO7g.mjcwX1z4WIrNpp1Crx/yDqnjroD.';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
})

//
// var message = 'I am a tops bloke';
// var hash = SHA256(message).toString();
//
// console.log('Message: ', message);
// console.log('Hash: ', hash);
//
// var data = {
//   id: 4
// };
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'secret salt').toString()
// }
//
// // LINES TO SIMULATE DATA BEING CHANGED, SO IT DOESNT HAVE THE SALT
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'secret salt').toString();
//
// if (resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('data was fiddled');
// }
