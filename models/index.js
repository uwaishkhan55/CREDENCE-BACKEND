
const mongoose = require('mongoose')

const product = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  img: {
    type: String
  },
  summary: {
    type: String
  }
  
} ,{
  timestamps: true,
  versionKey:false
})
const connnectDB=async ()=>{
  const uri = process.env.URI
mongoose.connect(uri, { useUnifiedTopology: true,useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
}
const Product=mongoose.model('product', product);
module.exports = {Product,connnectDB}
