const mongoose = require('mongoose')

const connectDb = async() =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Database Connected');
        
    } catch (error) {
        console.log('Error in connecting database',error);
        
    }
}

module.exports = connectDb