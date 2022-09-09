import express from "express";
const router  = express.Router();
import homeController from '../controllers/homeController.js'
import aboutController from '../controllers/aboutUsController.js'
import contactUsController from "../controllers/contactUsController.js";
import {saveForm, userController} from '../controllers/useContoller.js'
router.get("/", homeController);
router.get("/aboutus", aboutController)
router.get("/contactus", contactUsController)
router.get("/createuser",userController)
router.post("/saveForm", saveForm)
export default router;