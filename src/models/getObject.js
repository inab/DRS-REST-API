import axios from 'axios';
import mongoose from 'mongoose';
import Joi from 'joi';
    
const objectIdSchema = new mongoose.Schema({
    object_id: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }

    // Some realistic schema here
});

const ObjectId = mongoose.model('ObjectId', objectIdSchema);

function validateObjectId(objectId) {
  const schema = {
    object_id: Joi.string().min(5).max(50).required()
  };

  return Joi.validate(objectId, schema);
}

exports.objectIdSchema = objectIdSchema;
exports.ObjectId = ObjectId; 
exports.validateObjectId = validateObjectId;
    