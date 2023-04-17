const express = require ('express');
const router = express.Router();

const { readlist, createlist, updatelist, deletelist } = require('../controllers/gifts.js');

router.get('/', readlist);
router.post('/', createlist);
router.put('/:id', updatelist);
router.delete('/:id', deletelist);


module.exports = router ;
