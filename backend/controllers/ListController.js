import List from "../models/list.js";

const createList = async (req, res) => {
	if (req.user.isAdmin) {
		const newList = new List(req.body);
		try {
			const savedList = await newList.save();
			res.status(201).json(savedList);
		} catch (err) {
			res.status(500).json(err);
		}
	} else {
		res.status(403).json("You are not allowed!");
	}
};

const deleteListById = async (req, res) => {
	if (req.user.isAdmin) {
		try {
			await List.findByIdAndDelete(req.params.id);
			res.status(201).json("The list has been delete...");
		} catch (err) {
			res.status(500).json(err);
		}
	} else {
		res.status(403).json("You are not allowed!");
	}
};

const getList = async (req, res) => {
	const typeQuery = req.query.type;
	const genreQuery = req.query.genre;
	let list = [];
	try {
		if (typeQuery) {
			if (genreQuery) {
				list = await List.aggregate([
					{ $sample: { size: 10 } },
					{ $match: { type: typeQuery, genre: genreQuery } },
				]);
			} else {
				list = await List.aggregate([
					{ $sample: { size: 10 } },
					{ $match: { type: typeQuery } },
				]);
			}
		} else {
			list = await List.aggregate([{ $sample: { size: 10 } }]);
		}
		res.status(200).json(list);
	} catch (err) {
		res.status(500).json(err);
	}
};

export default {
	createList,
	deleteListById,
	getList,
};
