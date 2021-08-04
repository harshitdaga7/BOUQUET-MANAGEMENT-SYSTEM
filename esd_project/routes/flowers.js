var express = require('express');
var flowerController = require('../controller/flowerController');
// const flower = require('../models/flower');
var router = express.Router();

router.get('/find/', flowerController.GET_ALL_FLOWERS); // by sort, limit
router.get('/find/:id',flowerController.GET_FLOWER_BY_ID);

router.post('/create', flowerController.POST_CREATE_FLOWER);
router.get('/create', flowerController.GET_CREATE_FLOWER);

router.put('/update/:id',flowerController.UPDATE_FLOWER_BY_ID);

router.delete('/delete/:id',flowerController.DELETE_FLOWER_BY_ID);

module.exports = router;