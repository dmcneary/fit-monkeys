const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const session = require('express-session');
const dbConnection = require('./models');
const MongoStore = require('connect-mongo')(session);
const passport = require('./passport');
const app = express();
const PORT = 3001;
const routes = require('./routes')

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use(routes)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./fit-monkeys/build/index.html"));
});


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

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
