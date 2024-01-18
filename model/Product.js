const mongoose = require("mongoose") ;

const {Schema , model } = mongoose ;

const ProductSchema = new Schema({
    
    name : {
        type: String,     
    },
    
    description : {
        type: String,
    },
    price : {
        type: String,
    },


    reference : {
        type: String,
    },

   
  

   imageURL : {
       type : String 
    },
    


}, { timestamps: true })


module.exports = Product = model('product', ProductSchema)