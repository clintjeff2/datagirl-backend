const Rating = require('./../models/rating.model');

exports.createRating = async (req, res) => {
	try {
		const data = req.body;

		const user = await Rating.create(data);

		res.status(201).json({ message: 'Successs in creating rating' });
	} catch (err) {
		console.log(err);
		res.status(400).json({ message: 'Failed to create rating', error: err });
	}
};

exports.getRating = async (req, res) => {
	try {
		const ratingId = req.params.id;

		const rating = await Rating.find({ _id: ratingId });

		res.status(200).json({ message: 'Success', rating });
	} catch (err) {
		res.status(500).json({ message: 'Failed to get rating', err });
	}
};

exports.getAllRatings = async (req, res) => {
	try {
		const ratings = await Rating.find().populate('owner');

		res
			.status(200)
			.json({ message: 'success', results: ratings.length, ratings });
	} catch (err) {
		res.status(500).json({ message: 'Failed to get all ratings', err });
	}
};

exports.updateRating = async (req, res) => {
	try {
		const ratingId = req.params.id;
		const data = req.body;

		const rating = await Rating.findByIdAndUpdate(ratingId, data, {
			new: true,
		});

		res.status(200).json({ message: 'success', rating });
	} catch (err) {
		res.status(500).json({ message: 'Failed  to update rating', err });
	}
};

exports.deleteRating = async (req, res) => {
	try {
		const ratingId = req.params.id;

		await Rating.findByIdAndDelete(ratingId);

		res.status(204).json({ message: 'Deleted' });
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: 'Failed to delete rating' });
	}
};
