const router = require("express").Router();
const activityController = require("../controllers/activityController");


router.route("/activities")
  .get(activityController.findAll)
  .post(activityController.create);


router
  .route("/activities/:id")
  .get(activityController.findById)
  .put(activityController.update)
  .delete(activityController.remove);

module.exports = router;