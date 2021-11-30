
const mongoose = require('mongoose')
const auto =require('mongoose-auto-increment');
const studSchema = new mongoose.Schema({

    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },

})

auto.initialize(mongoose.connection)
studSchema.plugin(auto.plugin,'user')

module.exports = mongoose.model('user',studSchema)