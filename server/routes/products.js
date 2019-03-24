const express = require('express');
const router = express.Router();
const {
	Products,
	subcategory,
	Category,
	subSubCategory,
} = require('../models');

function sendError(res, err) {
	var result = {
		success: false,
		error: err,
	};
	return res.json(result);
}

function sendSuccess(res, result) {
	var finalResult = {
		success: true,
		data: result,
	};
	return res.json(finalResult);
}

router.get('/products', function(req, res) {
	return new Promise(function(resolve, reject) {
		Products.findAll()
			.then((result) => {
				sendSuccess(res, result);
			})
			.catch(function(err) {
				sendError(res, err);
			});
	});
});

router.get('/categories', function(req, res) {
	return new Promise(function(resolve, reject) {
		Category.findAll()
			.then((result) => {
				sendSuccess(res, result);
			})
			.catch(function(err) {
				sendError(res, err);
			});
	});
});

module.exports = router;
