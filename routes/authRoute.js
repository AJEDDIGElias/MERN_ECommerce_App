import express from "express";
import { registerController, loginController, testController, forgotPasswordController, updateProfileController } from '../controllers/authController.js'
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//Routing


//REGISTER || METHOD POST
router.post('/register', registerController);

//LOGIN || METHOD POST
router.post('/login', loginController);

//FORGOT PASSWORD || METHOD POST
router.post('/forgot-password', forgotPasswordController);

//Test routes
router.get('/test', requireSignIn, isAdmin, testController);

//Protected user routes
router.get('/user-auth', requireSignIn, (req,res) => {
    res.status(200).send({ok: true});
});

//Protected admin routes
router.get('/admin-auth', requireSignIn, isAdmin, (req,res) => {
    res.status(200).send({ok: true});
});

//Update profile
router.put('/profile', requireSignIn, updateProfileController);

export default router;