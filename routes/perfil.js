const express= require("express")
const router = express.Router();
const perfilController = require("../controllers/perfilController")
const validator = require('../middlewares/validator');

router.get("/perfil/:id", perfilController.root);
router.post("/perfil/:id",validator.profile, perfilController.edit);
router.get("/controlarea", perfilController.controlarea);
router.post("/updaterol", perfilController.updaterol);
router.get("/editpas/:id", perfilController.editpas);
router.post("/updatecontra",validator.password, perfilController.updatecontra);



module.exports = router;
