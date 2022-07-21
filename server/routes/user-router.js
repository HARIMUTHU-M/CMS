const express = require(express)

const UserCtrl = require("../controllers/user-ctrl")

const router = express.Router()

router.post("/userLogin",UserCtrl.userLogin)
router.post("/userRegister",UserCtrl.userRegister)
router.get("/viewMenu",UserCtrl.getMenu);
router.post("/placeOrder",UserCtrl.placeOrder);

module.exports = router;