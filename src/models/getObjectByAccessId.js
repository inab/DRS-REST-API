import axios from 'axios';
import mongoose from 'mongoose';
import Joi from 'joi';
    
const objectByAccessIdSchema = new mongoose.Schema({
    access_id: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },

    object_id: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }

    // Some realistic schema here
});

const ObjectByAccessId = mongoose.model('ObjectByAccessId', objectByAccessIdSchema);

function validateObjectByAccessId(objectByAccessId) {
  const schema = {
    access_id: Joi.string().min(5).max(50).required(),
    object_id: Joi.string().min(5).max(50).required()
  };

  return Joi.validate(objectByAccessId, schema);
}

exports.objectByAccessIdSchema = objectByAccessIdSchema;
exports.ObjectByAccessId = ObjectByAccessId; 
exports.validateObjectByAccessId = validateObjectByAccessId;