const express = require('express');
const { request } = require('http');
const router = express.Router();

//get a list of all tours
router.get('/touren', function(req, res){
    res.send({type:'GET'})
});

//add a new tour
router.post('/touren', function(req, res){
    console.log(req.body);
    res.send({type:'POST'});
});

/* //update a tour
router.put('/touren/:id', function(req, res){
    res.send({type:'PUT'})
}); */

module.exports = router;