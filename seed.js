var Promise = require('bluebird');
var mongoose = require('mongoose');
var models = require('./user.js');

var data = {
  User: [
    {email: "qwew@fake.com",
    name: "foo",
    age: 10,
    gender: 'f',
    login: Date.now()},
    {email: "fghgugr@fake.com",
    name: "boo",
    age: 30,
    gender: 'm',
    login: Date.now()},
    {email: "ujcinuhuffr@fake.com",
    name: "Mary",
    age: 21,
    gender: 'f',
    login: Date.now()
    },{
    email: "igrygryg@fake.com",
    name: "coo",
    age: 20,
    gender: 'm',
    login login: Date.now()
    },
    {
    email: "vfhhv@fake.com",
    name: "koo",
    age: 60,
    gender: 'f',
    login: Date.now()
    },
    {
    email: "mivfjvir@fake.com",
    name: "moo",
    age: 55,
    gender: 'm',
    login: Date.now()
    },{
    email: "urhfrh@fake.com",
    name: "Doo",
    age: 14,
    gender: 'f',
    login: Date.now()
    }
  ]
};

mongoose.connection.on('open', function() {
  mongoose.connection.db.dropDatabase(function() {

    console.log("Dropped old data, now inserting data");
    Promise.map(Object.keys(data), function(modelName) {
      return Promise.map(data[modelName], function(item) {
        return models[modelName].create(item);
      });
    }).then(function() {
      console.log("Finished inserting data");
    }, console.log).then(function() {
      mongoose.connection.close()
    });

  });
});