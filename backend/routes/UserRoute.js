import express from "express";
import UserController from "../controllers/UserController.js";
import { jwtParse } from "../middleware/auth.js";

const router = express.Router();

router.put("/:id", jwtParse, UserController.updateUserById);
router.delete("/:id", jwtParse, UserController.deleteUserById);
router.get("/find/:id", jwtParse, UserController.getUserById);
router.get("/", jwtParse, UserController.getAllUser);
router.get("/stats", UserController.getUserStats);

export default router;
