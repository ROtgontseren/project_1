const { Router } = require("express");
const { signup, signin,catadd, catput, catdel} = require("../controller/authController");

const router = Router();

router.route("/signup").post(signup);
router.route("/signin").post(signin);
router.route("/catadd").post(catadd);
router.route("/catput").put(catput);
router.route("/catdel").delete(catdel);

module.exports = router;
