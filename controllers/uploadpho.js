const User = require ('../models/User');
const fs = require ('fs');
const {promisify} = require('util');
const { uploadError } = require('../utils/uploadErrors');
const pipeline = promisify(require('stream').pipeline);
const multer = require("multer");
const upload = multer().single('file');


//upload profile photo
exports.uploadProfile = async (req, res) => {
  console.log('work')
    try {
      if (
      req.file.detectedMimeType !== "image/jpg" && 
      req.file.detectedMimeType !== "image/png" &&
      req.file.detectedMimeType !== "image/jpeg"
      )
      throw Error ("Invalid File Type!");
      if (req.file.size> 500000) throw Error ("Size Unsupported!");
    } catch (err) {
      const errors = uploadError(err)
      return res.status(201).json({errors});
    }
    const fileName = req.body.fullName + ".jpg";
    console.log(`${__dirname}/../client/public/uploads/profile/${fileName}`);
    await pipeline(
      req.file.stream,
      fs.createWriteStream(
        `${__dirname}/../client/public/uploads/profile/${fileName}`
      )
    )
  };

//upload profile photo