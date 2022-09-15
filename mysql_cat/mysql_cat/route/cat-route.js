const express = require('express')
const router = express.Router()
const catController = require('../controllers/cat-controller')
const {check , validationResult} = require('express-validator')

router.get('/view',catController.getall)
router.get('/view/:catId',catController.getbyId)
router.delete('/view/:catId',catController.deletebyId)

router.post('/add',
[check('category_name').not().isEmpty().withMessage("cat name require")],
[check('category_desc').not().isEmpty().withMessage("cat name require")],
catController.addData)

router.patch('/add/:catId',
[check('category_name').not().isEmpty().withMessage("cat name require")],
[check('category_desc').not().isEmpty().withMessage("cat name require")],
catController.updateData)


module.exports = router