var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Tbag'
  };

  setTimeout(() => {
    callback(user);

  }, 3000)
}

getUser(69, (user) => {
  console.log(user);
})
