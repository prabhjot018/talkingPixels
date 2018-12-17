var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    url = require('url'),
    ObjectId =  mongoose.Schema.Types.ObjectId;

var productModel = new Schema({
  productDL:{
  type: url,
  required: true,
  trim: true
},
price: {
  type: Number,
  required: true,
  trim: true
},
name: {
  type: String,
  required: true,
},
description: {
  type: String,
  required: false,
},
userId: {
  type: ObjectId,
  required: true
}
});
// productModel.index({productMuserId});
module.exports = mongoose.model('Product',productModel);
