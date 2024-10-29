var exporess = require('express');
var router = express.Router();

let inventoryController = require('../controllers/inventory');

router.get('/list', inventoryController.inventoryList);

router.put('/edit/:inventoryID', inventoryController.inventoryUpdate);

