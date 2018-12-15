var express = require('express');
var router = express.Router();
var event=[{
    date: '2',
    time: '2',
    duration: '2',
    desc: 'hjfasd'}];
/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(event);
    res.render('index',{data: event});
});

router.post('/',function(req, res, next){
    console.log('posttttt');
    var obj= {
        date: req.body.date,
        time: req.body.time,
        duration: req.body.duration,
        desc: req.body.desc
    }
    console.log('obj',obj);
    event.push(obj);
    res.redirect('/');

    })
module.exports = router;
