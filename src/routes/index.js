import { version } from '../../package.json';
import { Router } from 'express';
import { validateObjectId } from '../models/getObject';
import { validateObjectByAccessId } from '../models/getObjectByAccessId';
import axios from 'axios';

export default ({ config, db }) => {
	let api = Router();

	// PASSPORTS EXAMPLE
	//api.get('/objects/:object_id', passport.authenticate('keycloak', { session: false }), (req, res) => 
	
	api.get('/objects/:object_id', (req, res) => 
	{
		let header = req.headers.authorization.split('Bearer ')[1];
		let object_id = req.params.object_id;
		let baseUrl = "https://***/api/v1";

		async function axiosGet() {
			try {
				/*
				const data = await axios({  
					method: 'get',
					url: baseUrl + '/objects/' + `${object_id}`,
					headers: {
						Authorization: header
					}
				});*/
			
				//res.json({ object_id :  `${data}` });
				const data = "URL: " + baseUrl + '/objects/' + `${object_id}`;
				console.log("URL: " + baseUrl + '/objects/' + `${object_id}`);
				res.json(data)
				
			} catch(error) {
				console.error(error);
				res.json({ error : "error" });
			}
		}

		axiosGet();

	});

	/*api.get('/objects/:object_id/access/:access_id', passport.authenticate('keycloak', { session: false }), (req, res) => 
	{
		res.json({ object_id : `${req.params.object_id}`, 
				   access_id :  `${req.params.access_id}` });
	});*/
	
	return api;
}
