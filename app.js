const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const session = require('express-session');
const dbConnection = require('./models');
const MongoStore = require('connect-mongo')(session);
const passport = require('./passport');
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');
const routes = require('./routes');
const path = require('path');

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
	session({
		secret: 'fraggle-rock', 
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("fit-monkeys/build"));
}
// Routes
app.use(routes)

if (process.env.NODE_ENV === "production") {
	app.use('*', function(req, res) {
		res.sendFile(path.join(__dirname, './fit-monkeys/build/index.html'));
	});
}

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

var databaseUri = 'mongodb://heroku_0mdg0tpm:8jcr3g8v6e198mk37pnjqgsccc@ds259596.mlab.com:59596/heroku_0mdg0tpm';

if (process.env.MONGODB_URI) {
	mongoose.connect(process.env.MONGODB_URI);

} else {
	mongoose.connect(databaseUri);
}

var db = mongoose.connection;

db.on('error', function(err) {
 console.log('Mongoose Error: ', err);

});

db.once('open', function() {
	console.log('Mongoose connection successful.')
});
