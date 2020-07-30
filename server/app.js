const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/DB';

const User = require('./model/user');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

var router = express.Router();

router.use(function (req, res, next) {
    // do logging
    console.log('Something is happening.');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next(); // make sure we go to the next routes and don't stop here
});

app.use('/api', router);

router.get('/', function (req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

mongoose.connect(url); //connecting to MongoDb

router.route('/users')
    .post(function (req, res) {                // create a user (accessed at POST http://localhost:8080/api/users) 
        var user = new User();                // create a new instance of the User model
        user.name = req.body.name;            // set the user details (comes from the POST request)
        user.desc = req.body.desc;
        user.state = req.body.state;
        user.age = req.body.age;
        user.ethnicity = req.body.ethnicity;
        user.race = req.body.race;
        user.sex = req.body.sex;
        user.height = req.body.height;
        user.weight = req.body.weight;
        console.log(user);
        user.save(function (err) {            // save the user and check for errors
            if (err)
                res.send(err);
            res.json({ message: 'User created!' });
        });

    })
    .get(function (req, res) {
        User.find(function (err, users) {
            if (err)
                res.send(err);

            res.json(users);
        });
    });

app.listen(port, () => console.log('blog server running on port 8080!'))