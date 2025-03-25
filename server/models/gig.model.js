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
  providerid: {
    type: mongoose.Schema.Types.ObjectId,
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
  compitionDate: {
    type: Date,
    required: true,
  }, 
  status: {
    type: String,
    enum: ["new", "inprocess", "completed"],
    default: "new",
  },
  createdAt: {
    type: Date,
  },
});

const Gig = mongoose.model("Gig", gigSchema);

module.exports = Gig;
