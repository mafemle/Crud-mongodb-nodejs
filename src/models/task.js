//esquema de la base de datos
const mongoose = require('mongoose')
const Shema = mongoose.Schema

const TaskShema = new Shema({
    title: {
        type:String,
        require:true
    },
    description: String,
    status: {
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('tasks',TaskShema)