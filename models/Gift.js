const mongoose = require('mongoose')
const  GiftSchema = new mongoose.Schema({
    category: {
        type: String,
        enum: ['Birthday','Marriage','Baby Shower','Event','Other'],
        required: [true, 'type is required']
      },
      name:{
        type: String,
        required :true,
    },
    description :{
        type:[
          {
            details:{
                type: String,
                maxlength:500,
                required :true,
            },
            pictrue:String,
            timestamp: Number,
          }
        ],
      },
      creator:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required : true
      },
      likers:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
      }],

},{timestamp: true});
const Gift = mongoose.model("gifts", GiftSchema);

module.exports = Gift;
