const express = require('express');
const router = express.Router();
const JWT = require('../helper/JWT');

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
});

router.post('/test', (req, res) => {
    return res.json({response: req.body});
});

router.post('/account', (req, res) => {
    try{
        const request = req.body.params;
        const controller = require('../controller/'+request.controller);
        const method = request.method;
        controller[method](req, res);
    }catch(error){
        res.send(error);
    }
});

router.post('/verify-account',JWT.verify, (req, res) => {
    try{
        const request = req.body.params;
        const controller = require('../controller/'+request.controller);
        const method = request.method;
        controller[method](req, res);
    }catch(error){
        res.send(error);
    }
});

router.post('/meeting',JWT.verify, (req, res) => {
    try{
        const request = req.body.params;
        const controller = require('../controller/meeting/'+request.controller);
        const method = request.method;
        controller[method](req, res);
    }catch(error){
        res.send(error);
    }
});

module.exports = router;