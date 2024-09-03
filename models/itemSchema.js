const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    image:{
        type: String,
        require: true,
    },
    title:{
        type: String,
        require: true,
    },
    description:{
        type: String,
        require: true,
    },
    quantity:{
        type: String,
        require: true,
    },
    price:{
        type: String,
        require: true, 
    },
    date:{
        type: String,
        require: true, 
    }
})

const Item = new mongoose.model('Item',itemSchema)
module.exports = Item