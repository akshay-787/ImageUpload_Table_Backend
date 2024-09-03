const express = require('express')
const addItem = require('../controllers/addItem')
const getAllData = require('../controllers/getItem');
const upload = require('../upload/upload');
const router = express.Router()

router.route('/addItem').post(upload.single('image'), addItem);
router.route('/getAllData').get(getAllData)


module.exports = router