const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const homeRoute = require('./routes/home');
const app = express();
const bodyParser = require('body-parser');

require('dotenv').config();

app.use(cors());

app.set('view engine', 'ejs');
app.set('views', './src/pages');
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static(path.join(`${__dirname}/public`)));

app.use('/', homeRoute);

const port = process.env.PORT || 8080;
console.log(process.env)

mongoose
	.connect(process.env.DB_HOST, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	})
	.then(() => {
		app.listen(port, () => console.log(`Server and Database running on ${port}, http://localhost:${port}`));
	})
	.catch((err) => {
		console.log(err);
	});