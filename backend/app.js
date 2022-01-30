const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const passport = require('passport');
const flash = require('connect-flash');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const db = require('./config/database.js');

require('dotenv').config();

mongoose.connect(db.url, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
})
	

// express app configs
app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());
app.use(express.urlencoded({ extended: false }));

// templating configs
app.set('view engine', 'ejs');
app.set('views', './src/pages');
app.use(express.static(__dirname + '/public/dist'));

// passport configs
app.use(session({ secret: 'nye2022'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// route configs

require('./routes/routes.js')(app, passport);
app.listen(port);
console.log('Started on port: ' + port)
