const { Router } = require("express");
const { postHandlerActivity } = require("../handlers/postHandler");
const {
  getHandlerActivities,
  getHandlerActivityByName,
} = require("../handlers/getHandler");

const router = Router();

router.post("/", postHandlerActivity);
router.get("/", getHandlerActivities);
router.get("/:activity", getHandlerActivityByName);

module.exports = router;
