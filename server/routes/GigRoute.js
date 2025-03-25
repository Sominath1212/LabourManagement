const {
  createGig,
  editGig,
  deleteGig,
  allGigs,
} = require("../controllers/GigController");
const { ensureAuthenticated } = require("../middlewares/Authonticated");

const router = require("express").Router();

router.post("/create-gig", createGig);
router.post("/edit-gig", editGig);
router.post("/delete-gig", deleteGig);
router.get("/all-gigs", allGigs);

module.exports = router;
