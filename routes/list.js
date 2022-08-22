const express = require('express')
const router = express.Router()
const listController = require('../controllers/list')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, listController.getList)

router.post('/createItem', listController.createItem)

router.put('/toggleDone', listController.toggleDone)

