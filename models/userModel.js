var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var userModel = new Schema({
  email: {
  type: String,
  unique: true,
  required: true,
  trim: true
},
username: {
  type: String,
  unique: true,
  required: true,
  trim: true
},
password: {
  type: String,
  required: true,
},
birthDate: {
  type: Date,
  required: false,
}
});
userModel.pre('save', function (next) {
  var user = this;
  bcrypt.hash(user.password, 10, function (err, hash){
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});

module.exports = mongoose.model('User',userModel);
