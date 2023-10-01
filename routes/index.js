var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
 { 
    title: 'Home',
    mainHeading: 'Hello My Friend'
  });
});

router.get('/home', function(req, res, next) {
  res.render('index',
  { 
    title: 'Home',
    mainHeading: 'Hello My Friend'
  });
});


/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index', 
  { 
    title: "About",
    mainHeading: 'Hello My Friend'
  });
});


/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', 
  { 
    title: 'Projects',
    mainHeading: 'Hello My Friend'
  });
});


/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', 
  { 
    title: 'Services',
    mainHeading: 'Hello My Friend'
  });
});


/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('index', 
  { 
    title: 'Contact Us',
    mainHeading: 'Hello My Friend'
  });
});

module.exports = router;