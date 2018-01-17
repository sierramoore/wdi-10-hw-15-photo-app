const mongoose = require('mongoose');
const photoSchema = mongoose.Schema({
    // TODO add more photo attributes
    name: {type: String, required: true}
});

Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;