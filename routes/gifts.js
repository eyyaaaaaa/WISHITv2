const express = require ('express');
const router = express.Router();

const { readselflist,readotherslist, createlist, updatelist, deletelist } = require('../controllers/gifts.js');

router.get('/:id', readselflist);
router.get('/wishlist/:id', readotherslist);
router.post('/', createlist);
router.put('/:id', updatelist);
router.delete('/:id', deletelist);


module.exports = router ;
