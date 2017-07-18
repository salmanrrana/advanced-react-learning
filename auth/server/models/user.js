const mongoose = require('mongoose');
// schema is what we used for the particular fileds that our models have
const Schema = mongoose.Schema;

//define our model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});


//create the model class
// this loads the schema into mongoose
const ModelClass = mongoose.model('user', userSchema);

//export the model
module.exports = ModelClass;
