const GigModel = require("../models/gig.model");

const createGig = async (req, res) => {
  const {
    title,
    description,
    providerid,
    price,
    cover,
    category, 
    location,
    providerEmail,
    compitionDate,
    status,
  } = req.body;
  // console.log(req.body);

  const newGig = new GigModel({
    title,
    description,
    price,
    cover,
    category,
    providerid,
    status,
    location,
    providerEmail,
    compitionDate,
  });
  const gigId = newGig.save();
// console.log(gigId);

  // firsly we validate a data
  res.status(200).json({ message: "Gig created successfully"});
};

const editGig = async (req, res) => {
  const { gigId } = req.params;
  const {
    title,
    description,
    providerid,
    price,
    cover,
    category,
    location,
    providerEmail,
    compitionDate,
    status,
  } = req.body;
  const gig = await GigModel.findByIdAndUpdate(
    gigId, 
    {
      title,
      description,
      providerid,
      price,
      cover,
      category,
      location,
      providerEmail,
      compitionDate,
      status,
    },
    { new: true }
  );
  res.status(200).json({ message: "Gig updated successfully", gig });
};

const deleteGig = async (req, res) => {
  const { gigId } = req.params;
  const gig = await GigModel.findByIdAndDelete(gigId);
  res.status(200).json({ message: "Gig deleted successfully", gig });
};

const allGigs = async (req, res) => {
  const gigs = await GigModel.find();
  res.status(200).json({ gigs }); 
};
module.exports = {
  
  createGig,
  editGig,
  deleteGig,
  allGigs,
};


