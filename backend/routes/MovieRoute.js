import express from "express";
import MovieController from "../controllers/MovieController.js";
import { jwtParse } from "../middleware/auth.js";

const router = express.Router();

router.post("/", jwtParse, MovieController.createMovie);
router.put("/:id", jwtParse, MovieController.updateMovieById);
router.delete("/:id", jwtParse, MovieController.deleteMovieById);
router.get("/find/:id", jwtParse, MovieController.getMovieById);
router.get("/random", jwtParse, MovieController.getRandomMovie);
router.get("/", jwtParse, MovieController.getAllMovie);

export default router;
