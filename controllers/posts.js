const { json } = require("express");
const Post = require("../models/Post.js");
const User = require("../models/User.js");
const ObjectId = require("mongoose").Types.ObjectId;
//get posts (filter)
exports.readPost = async (req, res) => {
    try {
        const docs = await Post.find().sort({createdAt: -1});
        res.send(docs);
    } catch (err) {
        console.log("error to get data: " + err);
    }
};
//get posts (filter)

//get posts (timeline)
exports.readTimelinePost = async (req, res) => {
  try {
      const currentUser= await User.findById(req.params.id);
      const userPosts= await Post.find({creator:currentUser._id });
      const friendPosts = await Promise.all(
        currentUser.following.map(async (friendId) => {
          return await Post.find({ creator: friendId });
        }));
      res.status(200).json(userPosts.concat(...friendPosts))
  } catch (err) {
      res.status(500), json(err);
  }
};
//get posts (timeline)

//create a post
exports.createPost = async (req, res) => {
    const newPost = new Post({
        creator:req.body.creator, 
        caption:req.body.caption,
        category:req.body.category,
        video:req.body.video,
        likes:[],
        comments:[],
    });
    try {
        const post = await newPost.save();
        return res.status(201).json(post);
    } catch (err) {
        res.status(400).send(err);
    }
};
//create a post

//update a post
exports.updatePost = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown: " + req.params.id);

  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).send("Post Not Found !");
    if (post.creator.toString() !== req.body.creator)
      return res.status(403).send("You Can Only Update Your Own Posts !");
    else {
      const updatedRecord = {
        caption: req.body.caption,
      };
      const docs = await Post.findByIdAndUpdate(
        req.params.id,
        { $set: updatedRecord },
        { new: true }
      );
      res.send(docs);
    }
  } catch (err) {
    console.log("Update error: " + err);
  }
};

//update a post

//delete a post
exports.deletePost = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown: " + req.params.id);

  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).send("Post Not Found !");
    if (post.creator.toString() !== req.body.creator)
      return res.status(403).send("You Can Only Delete Your Own Posts !");
    else {
      const deletedPost = await Post.findByIdAndDelete(req.params.id);
      res.send(deletedPost);
    }
  } catch (err) {
    console.log("Delete error: " + err);
  }
};
//delete a post


//unlike a post
exports.likePost = async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send("ID unknown: "+ req.params.id);

    try {
        const post = await Post.findById(req.params.id).exec();

        if (!post.likers.includes(req.body.id)) {
          const post = await Post.findByIdAndUpdate(
            req.params.id,
            {
                $addToSet: {likers: req.body.id}
            },
            {new: true}
        ).exec();

        const user = await User.findByIdAndUpdate(
            req.body.id,
            {
                $addToSet: {likes: req.params.id}
            },
            {new: true}
        ).exec();

        res.send({post, user});
        }
        else{
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            {
                $pull: {likers: req.body.id}
            },
            {new: true}
        ).exec();

        const updatedUser = await User.findByIdAndUpdate(
            req.body.id,
            {
                $pull: {likes: req.params.id}
            },
            {new: true}
        ).exec();

        res.send({post: updatedPost, user: updatedUser});
       }

    } catch (err) {
        return res.status(400).send(err);
    }
};
//unlike a post

//comment a post
exports.commentPost = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).send("ID unknown: " + req.params.id);
    }
  
    try {
      const updatedPost = await Post.findByIdAndUpdate(
        req.params.id,
        {
          $push: {
            comments: {
              commenterId: req.body.commenterId,
              commenterName: req.body.commenterName,
              text: req.body.text,
              timestamp: new Date().getTime(),
            },
          },
        },
        { new: true }
      ).exec();
  
      return res.send(updatedPost);
    } catch (err) {
      return res.status(400).send(err);
    }
  };
//comment a post

//edit comment a post
exports.editCommentPost = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).send("ID unknown: " + req.params.id);
    }
    try {
      const post = await Post.findById(req.params.id);
      const thecomment = post.comments.find(
        (comment) => comment._id.equals(req.body.commentId)
      );
      if (!thecomment) return res.status(404).send("Comment not found");
      thecomment.text = req.body.text;
      await post.save();
      return res.status(200).send(post);
    } catch (err) {
      return res.status(500).send(err);
    }
  };
//edit comment a post

//delete comment a post
exports.deleteCommentPost = async (req, res) => {
    try {
      if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send("ID unknown: " + req.params.id);
      }
  
      const docs = await Post.findByIdAndUpdate(
        req.params.id,
        {
          $pull: {
            comments: {
              _id: req.body.commentId,
            },
          },
        },
        { new: true }
      );
  
      return res.send(docs);
    } catch (err) {
      return res.status(500).send(err);
    }
  };
  
//delete comment a post


//get posts (profile)
exports.readProfilePost = async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.id);
    const userPosts = await Post.find({ creator: currentUser._id });
    res.status(200).json(userPosts);
  } catch (err) {
    res.status(500).json(err);
  }
};
//get posts (profile)

