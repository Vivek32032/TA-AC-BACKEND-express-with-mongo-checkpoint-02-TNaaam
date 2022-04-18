
var express = require('express');
var router = express.Router();
var Event = require('../model/event')

// on event
router.get('/',(req,res,next)=>{

    Event.find({},(err,events)=>{
        if(err) return next(err);
        res.render('eventsList',{events : events})
    });

})

router.get('/new',(req,res)=>{
    res.render('addEvent')
})

router.post('/new',(req,res,next)=>{
    Event.create(req.body,(err,createdEvent)=>{
        if (err) return err;
        res.redirect('/events')
    })
})

router.get('/:id',(req,res)=>{
    var id = req.params.id
    Event.findById(id,(err,event)=>{
        if(err) return next(err);
        res.render('eventInfo',{event})
    });
})

module.exports = router;
