import { version } from '../../package.json';
import { Router } from 'express';
import { validateObjectId } from '../models/getObject';
import { validateObjectByAccessId } from '../models/getObjectByAccessId';
import fetchURL from '../utils/axiosGet';

export default ({ config, db }) => {
	let api = Router();

	api.get('/objects/:object_id', async (req, res) => 
	{
		let header = req.headers.authorization.split('Bearer ')[1];
		let object_id = req.params.object_id;
		let baseUrl = "https://{domain}/api/v1/objects/";

		let url = baseUrl + object_id;

		const response = await fetchURL(url, header);
		res.send(response);
	});

	api.get('/objects/:object_id/access/:access_id', async (req, res) => 
	{
		let header = req.headers.authorization.split('Bearer ')[1];
		let object_id = req.params.object_id;
		let access_id = req.params.access_id;
		let baseUrl = "https://{domain}/api/v1/objects/";

		let url = baseUrl + object_id + '/access/' + access_id;

		const response = await fetchURL(url, header);
		res.send(response);

	});
	
	return api;
}
