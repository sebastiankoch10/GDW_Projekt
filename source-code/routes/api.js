const express = require('express');
const router = express.Router();

//get a list of all tours
router.get('/touren', function(req, res){
    res.send({type:'GET'})
});

//add a new tour
router.post('/touren', function(req, res){
    console.log(req.body);
    res.send({
        type:'POST',
        stadt1: req.body.stadt2,
        stadt2: req.body.stadt2,
        beschreibung: req.body.beschreibung,
        schwierigkeit: req.body.schwierigkeit,
        fahrradart: req.body.fahrradart
    });
});

/* //update a tour
router.put('/touren/:id', function(req, res){
    res.send({type:'PUT'})
}); */

module.exports = router;