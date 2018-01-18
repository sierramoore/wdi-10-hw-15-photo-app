const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
});

User = mongoose.model('User', userSchema);
module.exports = User;