const express = require('express');
const router = express.Router();
const { User } = require('../models/User')

router.post('/register', async (req, res) => {
	try {
		// const salt = await bcrypt.genSalt();
		// const hashed = await bcrypt.hash(req.body.password, salt);
        const {name, email} = req.body;
		const data = await User.create(name, email);
		res.status(201).json(data);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports =  router ;