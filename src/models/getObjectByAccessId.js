import Joi from 'joi';

function validateObjectByAccessId(objectByAccessId) {
  const schema = {
    access_id: Joi.string().min(5).max(50).required(),
    object_id: Joi.string().min(5).max(50).required()
  };

  return Joi.validate(objectByAccessId, schema);
}

exports.validateObjectByAccessId = validateObjectByAccessId;