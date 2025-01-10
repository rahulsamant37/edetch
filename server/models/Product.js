const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  subCategory: { type: String, required: true },
  category:{type:String,required:true},
  productName: { type: String, required: true },
  description: { type: String, required: true },
  logo: { type: String, required: true },
  noOfStars: { type: Number, required: true },
  link: { type: String, required: true },
  noOfReviews: { type: Number, required: false }, 
  images: [{ type: String }],
  alternativeProducts: [
    {
      logo: { type: String, required: false },
      info: { type: String, required: false },
      description: { type: String, required: false },
    }
  ]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
