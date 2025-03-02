
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

const createGig = async (req, res) => {
  const {
      title,
      description,
      price,
      gigcover,
      gigcategory,
      provider,
      status,
      location,
      createdAt,
    } = req.body;

  

};

const editGig = async (req, res) => {  };

const deleteGig = async (req, res) => {};

const allGigs = async (req, res) => {};
module.exports = {
  createGig,
  editGig,
  deleteGig,
  allGigs,
};
