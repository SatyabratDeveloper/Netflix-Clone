import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  changeCurrentPassword,
  updateAccountDetails,
  refreshAccessToken,
} from "../controllers/user.controller.js";
import verifyJWT from "../middleware/auth.middleware.js";

const router = Router();

// routes
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/refresh-access-token").post(refreshAccessToken);

// secure routes
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/current-user").get(verifyJWT, getCurrentUser);
router.route("/change-password").patch(verifyJWT, changeCurrentPassword);
router.route("/update-account-details").patch(verifyJWT, updateAccountDetails);

export default router;
