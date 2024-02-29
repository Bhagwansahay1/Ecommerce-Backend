const { Router } = require("express");
const { registerUser, loginUser, logout, resetPassword, getUserDetails, updatePassword, updateProfile, forgotPassword} = require("../controllers/userController.js");
const { isAuthenticatedUser } = require("../middleware/auth.js");

const router = Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);

router.route("/logout").get(logout);

router.route("/me").get(isAuthenticatedUser, getUserDetails);

router.route("/password/update").put(isAuthenticatedUser, updatePassword);

router.route("/me/update").put(isAuthenticatedUser, updateProfile);


module.exports = router;