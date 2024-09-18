import express from "express";
import AuthRouter from "./AuthRoute.js";
import ListRouter from "./ListRoute.js";
import MovieRouter from "./MovieRoute.js";
import UserRouter from "./UserRoute.js";

const router = express.Router();

router.use("/auth", AuthRouter);
router.use("/lists", ListRouter);
router.use("/movies", MovieRouter);
router.use("/users", UserRouter);

export default router;
