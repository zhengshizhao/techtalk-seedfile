var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  	email: String,
  	name: String,
  	age: Number,
  	gender: String,
  	login: {type: Date}
})



mongoose.connect('mongodb://localhost/techtalkdb');
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

module.exports = {User: mongoose.model('User', UserSchema)};