const Gift = require("../models/Gift.js");
const User = require("../models/User.js");
const ObjectId = require("mongoose").Types.ObjectId;

//get wishlist (others)
exports.readotherslist = async (req, res) => {
    try {
        const id = req.params.id;
        const giftLists = await Gift.find({ creator: id });
        res.status(200).json(giftLists);
      } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve gift lists' });
      }
    };
  //get wishlist (others)

  //get wishlist (self)
  exports.readselflist = async (req, res) => {
    try {
        const id = req.params.id;
        console.log('hillouuu')
        const giftLists = await Gift.find({ creator: id });
        res.status(200).json(giftLists);
      } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve gift lists' });
      }
    };
  //get wishlist (self)

//create a gift
exports.createlist = async (req, res) => {

    const { category, gifts, creator, theme } = req.body;
  
    try {
      const newList = new Gift({
        theme,
        category,
        gifts,
        creator,
        likers: [],
      });
  
      const savedList = await newList.save();
  
      return res.status(201).json(savedList);
    } catch (err) {
      res.status(400).send(err);
    }
  };
//create a gift

//update a gift
// Update a gift
exports.updatelist = async (req, res) => {
  try {
    const updateFields = {};
    const id = req.params.id;

    if (req.body.category) {
      updateFields.category = req.body.category;
    }
    if (req.body.gifts) {
      updateFields.gifts = req.body.gifts;
    }
    if (req.body.theme) {
      updateFields.theme = req.body.theme;
    }

    const updatedList = await Gift.findByIdAndUpdate(
      id,
      updateFields,
      { new: true }
    );

    if (!updatedList) {
      return res.status(404).json({ error: 'Gift list not found' });
    }

    res.status(200).json(updatedList);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update gift list' });
  }
};

//update a gift

//delete a gift
exports.deletelist = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedList = await Gift.findByIdAndDelete(id);

    if (!deletedList) {
      return res.status(404).json({ error: 'Gift list not found' });
    }

    res.status(200).json({ message: 'Gift list deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete gift list' });
  }
};

//delete a gift

