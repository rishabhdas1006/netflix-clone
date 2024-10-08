import Movie from "../models/movie.js";

const createMovie = async (req, res) => {
	if (req.user.isAdmin) {
		const newMovie = new Movie(req.body);
		try {
			const savedMovie = await newMovie.save();
			res.status(201).json(savedMovie);
		} catch (err) {
			res.status(500).json(err);
		}
	} else {
		res.status(403).json("You are not allowed!");
	}
};

const updateMovieById = async (req, res) => {
	if (req.user.isAdmin) {
		try {
			const updatedMovie = await Movie.findByIdAndUpdate(
				req.params.id,
				{
					$set: req.body,
				},
				{ new: true }
			);
			res.status(200).json(updatedMovie);
		} catch (err) {
			res.status(500).json(err);
		}
	} else {
		res.status(403).json("You are not allowed!");
	}
};

const deleteMovieById = async (req, res) => {
	if (req.user.isAdmin) {
		try {
			await Movie.findByIdAndDelete(req.params.id);
			res.status(200).json("The movie has been deleted...");
		} catch (err) {
			res.status(500).json(err);
		}
	} else {
		res.status(403).json("You are not allowed!");
	}
};

const getMovieById = async (req, res) => {
	try {
		const movie = await Movie.findById(req.params.id);
		res.status(200).json(movie);
	} catch (err) {
		res.status(500).json(err);
	}
};

const getRandomMovie = async (req, res) => {
	const type = req.query.type;
	let movie;
	try {
		if (type === "series") {
			movie = await Movie.aggregate([
				{ $match: { isSeries: true } },
				{ $sample: { size: 1 } },
			]);
		} else {
			movie = await Movie.aggregate([
				{ $match: { isSeries: false } },
				{ $sample: { size: 1 } },
			]);
		}
		res.status(200).json(movie);
	} catch (err) {
		res.status(500).json(err);
	}
};

const getAllMovie = async (req, res) => {
	if (req.user.isAdmin) {
		try {
			const movies = await Movie.find();
			res.status(200).json(movies.reverse());
		} catch (err) {
			res.status(500).json(err);
		}
	} else {
		res.status(403).json("You are not allowed!");
	}
};

export default {
	createMovie,
	updateMovieById,
	deleteMovieById,
	getMovieById,
	getRandomMovie,
	getAllMovie,
};
