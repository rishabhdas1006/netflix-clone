import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import MainRouterV1 from "./routes/routesIndex.js";

const app = express();
const PORT = 3000;

dotenv.config();

mongoose
	.connect(process.env.MONGO_DB_URL)
	.then(() => console.log("Connected to DB"))
	.catch((err) => {
		console.error(err);
	});

app.use(express.json());

app.use("/api/v1", MainRouterV1);

app.get("/health", (req, res) => {
    res.status(200).json({msg: "OK!"})
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}!`);
});
