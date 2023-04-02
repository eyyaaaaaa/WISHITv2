const express = require ('express');
const router = express.Router();

const { readPost, createPost, updatePost, deletePost, likePost, unlikePost, commentPost, editCommentPost, deleteCommentPost } = require('../controllers/posts.js');

router.get('/', readPost);
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/likepost/:id', likePost);
router.patch('/unlikepost/:id', unlikePost);

// comments
router.patch('/commentpost/:id', commentPost);
router.patch('/editcommentpost/:id', editCommentPost);
router.patch('/deletecommentpost/:id', deleteCommentPost);

module.exports = router ;
