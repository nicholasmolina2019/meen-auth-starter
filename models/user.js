const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

//user schema
const userSchema = Schema({
    email: {type: String, unique: true, required:true},
    password: {type: string, required:true}
});
//user model
const User = mongoose.models('User', userSchema);


//export user model
module.exports = User;