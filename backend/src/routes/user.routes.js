import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  changeCurrentPassword,
  updateAccountDetails,
} from "../controllers/user.controller.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(logoutUser);
router.route("/current-user").post(getCurrentUser);
router.route("/change-password").post(changeCurrentPassword);
router.route("/update-account-details").post(updateAccountDetails);

export default router;
