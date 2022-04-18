
var express = require('express');
var router = express.Router();
var Event = require('../model/event')

// on event
router.get('/',(req,res)=>{
    res.render('eventsList')
})