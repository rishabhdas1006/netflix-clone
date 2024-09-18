import express from "express";
import ListController from "../controllers/ListController.js";
import { jwtParse } from "../middleware/auth.js";

const router = express.Router();

router.post("/", jwtParse, ListController.createList);
router.delete("/:id", jwtParse, ListController.deleteListById);
router.get("/", jwtParse, ListController.getList);

export default router;
