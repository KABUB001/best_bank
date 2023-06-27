
const mongoose = require('mongoose');

const connectDB= async()=>{
    try {
        await mongoose.connect('mongodb+srv://koffAnz:012345@blog.bxv6nsw.mongodb.net/?retryWrites=true&w=majority');
        console.log('Connected to MongoDB');
      } catch (error) {
       console.log('pas connecter')
      }
    
}

module.exports= connectDB



