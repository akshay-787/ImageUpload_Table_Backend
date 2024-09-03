const Item = require('../models/itemSchema');
const path = require('path')

const addItem = async (req, res) => {
  try {
    
    const { title, description, quantity, price, date } = req.body;
    const image = req.file.path.replace(/\\/g, '/'); 
    

    await Item.create({ image, title, description, quantity, price, date });
    res.status(200).json({ message: 'Item Added Successfully' });
  } catch (error) {
    console.log('Error:', error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = addItem;
