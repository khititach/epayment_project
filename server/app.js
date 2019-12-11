const express = require('express');
const expressLayout = require('express-ejs-layouts');
const flash = require('connect-flash');
const session = require('express-session');
const path = require('path');
const passport = require('passport');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const db_url = require('./config/db');

   // EJS 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.use(expressLayout);

    // Body Parser
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended : true }));

    // Express Session
app.use(session({
    secret:'secret',
    resave: true,
    saveUninitialized: true
}));

    // Passport middleware
app.use(passport.initialize());
app.use(passport.session());

    // Connect Flash
// app.use(flash());

    // Global vars
// app.use((req,res,next) => {
//     res.locals.success_msg = req.flash('success_msg');
//     res.locals.error_msg = req.flash('error_msg');
//     res.locals.error = req.flash('error');
//     res.locals.error_save = req.flash('error_save');
//     next();
// });

    // User local
app.use((req, res, next) => {
    res.locals.user = req.user || null;
    next();
})

    // Routes
const indexRoute = require('./routes/index');
app.use('/', indexRoute);

    // Server Port
var PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
        console.log('Server => Started Port '+PORT);
        if (err) {
            console.log(err);
        }
});