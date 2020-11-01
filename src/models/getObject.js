import Joi from 'joi';

function validateObjectId(objectId) {
  const schema = {
    object_id: Joi.string().min(5).max(50).required()
  };

  return Joi.validate(objectId, schema);
}

exports.validateObjectId = validateObjectId;
    