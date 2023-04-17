const Gift = require("../models/Gift.js");
const User = require("../models/User.js");
const ObjectId = require("mongoose").Types.ObjectId;
//get a gift
exports.readlist = async (req, res) => {
    try {
        const docs = await Gift.findfindByIdAndUpdate();
        res.send(docs);
    } catch (err) {
        console.log("error to get data: " + err);
    }
};
//get a gift

//create a gift
exports.createlist = async (req, res) => {
    const newGift = new Gift({
        creator:req.body.creator, 
        caption:req.body.caption,
        category:req.body.category,
        video:req.body.video,
        likes:[],
        comments:[],
    });
    try {
        const gift = await newGift.save();
        return res.status(201).json(gift);
    } catch (err) {
        res.status(400).send(err);
    }
};
//create a gift

//update a gift
exports.updatelist = async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send("ID unknown: "+ req.params.id);
    const updatedRecord={
        caption: req.body.caption,
    }
    try {
        const docs = await Gift.findByIdAndUpdate(
            req.params.id,
            {$set: updatedRecord},
            {new:true}
        );
        res.send(docs);
    } catch (err) {
        console.log("Update error: " + err);
    }
};
//update a gift

//delete a gift
exports.deletelist = async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send("ID unknown: "+ req.params.id);
    try {
        const deletedGift = await Gift.findByIdAndDelete(req.params.id);
        res.send(deletedGift);
    } catch (err) {
        console.log("Delete error: " + err);
    }
};
//delete a gift

