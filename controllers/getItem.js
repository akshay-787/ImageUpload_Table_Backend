const Item = require('../models/itemSchema')

const getAllData = async(req,res) =>{
    try {
        const getData = await Item.find()
        res.status(200).json({data:getData})
    } catch (error) {
        console.log('Error',error.message);
        res.status(500).json({ message: error.message })
    }
}

module.exports = getAllData