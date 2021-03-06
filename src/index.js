try {
const path = require('path');
const express = require('express');
//const morgan = require('morgan');
const { engine } = require('express-handlebars');
const { handlebars } = require("express-handlebars");
const { extname } = require('path');
var session = require('express-session');
const app = express();
const port = process.env.PORT || 5000;

const route = require('./routes');
const db = require('./config/db');

//Connect Database
db.connect();

app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//HTTP logger
//app.use(morgan('combined'));

//Template engine
app.engine('hbs', engine( { extname: "hbs", } ));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.use(session({
    secret: 'abcdefg',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }));

//Route init
route(app);

app.listen(port, () => {
    console.log(`app is running on port ${port}`);
})
} catch(err) {
    console.log(err);
}
