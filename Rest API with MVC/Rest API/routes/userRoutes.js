const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getall);
router.get('/:id', userController.getbyid);
router.post('/', userController.create);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

module.exports = router;