const mongoose = require("mongoose");

const gigSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
   
  },
  description: {
    type: String,
    required: true,
   
  },
  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  cover: {
    type: String,
   
  },
  category: {
    type: String,
    required: true,
   
  },
  location: {
    type: String,
    required: true,
    
  },
  providerEmail: {
    type: String,
    required: true,
    lowercase: true,
  },
  createdAt: {
    type: Date,
  },
  
  status: {
    type: String,
    enum: ["new", "inprocess", "completed"],
    default: "new",
  },
});

const Gig = mongoose.model("Gig", gigSchema);

module.exports = Gig;
