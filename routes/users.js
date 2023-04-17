const express = require ('express');
const router = express.Router();
const { getUser, updateUser, deleteUser, followUser, addCloseFriend, unfollowUser, removeCloseFriend } = require('../controllers/users.js');

const multer = require("multer");
const path = require('path');
const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) =>{
        const uploadPath = path.join(__dirname, '../client/public/uploads/profile/');
        console.log('uploadPath:', uploadPath);
        cb(null, uploadPath);
    },
    filename: (req, file, cb) =>{
        cb(null,Date.now() + file.originalname +'.jpg');
    },
});
const upload = multer({storage: fileStorageEngine});
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.put('/:id/follow', followUser);
router.put('/:id/addclosefriend', addCloseFriend);
router.put('/:id/unfollow', unfollowUser);
router.put('/:id/removeCloseFriend', removeCloseFriend);
//upload
router.post('/upload', upload.single('image'), (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ success: false, error: 'No file uploaded' });
      }
      console.log(req.file);
      return res.status(200).json({ success: true, message: 'File uploaded successfully' });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, error: 'Server error' });
    }
  });
module.exports = router ;
