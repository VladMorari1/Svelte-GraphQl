const {model, Schema} = require('mongoose')

const userSchema = new Schema({
    name: String,
    surname: String,
    age: Number,
    hobbies: [String]
})

module.exports = model('User', userSchema)