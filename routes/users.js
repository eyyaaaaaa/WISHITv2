const express = require ('express');
const router = express.Router();
const uploadpho = require('../controllers/uploadpho')
const { getUser, updateUser, deleteUser, followUser, addCloseFriend, unfollowUser, removeCloseFriend } = require('../controllers/users.js');
const multer  = require('multer')
const upload = multer().single('file');


router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.put('/:id/follow', followUser);
router.put('/:id/addclosefriend', addCloseFriend);
router.put('/:id/unfollow', unfollowUser);
router.put('/:id/removeCloseFriend', removeCloseFriend);
//upload
router.post('/upload',upload, uploadpho.uploadProfile);
module.exports = router ;
