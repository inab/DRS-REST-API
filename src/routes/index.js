import { version } from '../../package.json';
import { Router } from 'express';
import { ObjectId, validateObjectId } from '../models/getObject';
import { ObjectByAccessId, validateObjectByAccessId } from '../models/getObjectByAccessId';

export default ({ config, db, keycloak }) => {
	let api = Router();

	// Remember to put async (req, res) if we are going to use some async operations (MongoDB).
	api.get('/objects/:object_id', keycloak.protect(), (req, res) => {
		console.log(req.params.object_id);
		res.json({ object_id :  `${req.params.object_id}` });
	});

	api.get('/objects/:object_id/access/:access_id', keycloak.protect(), (req, res) => {
		console.log(req.params.object_id);
		console.log(req.params.access_id);
		// Do something
		res.json({ object_id : `${req.params.object_id}`, 
				  access_id :  `${req.params.access_id}` });
	});

	return api;
}
