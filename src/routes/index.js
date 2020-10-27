import { version } from '../../package.json';
import { Router } from 'express';

export default ({ config, db, keycloak }) => {
	let api = Router();

	// Remember to put async (req, res) if we are going to use some async operations (MongoDB).
	api.get('/version', keycloak.protect(), (req, res) => {
		res.json({ version });
	});

	api.get('/specification', (req, res) => {
		let specification = "https://ga4gh.github.io/data-repository-service-schemas/preview/release/drs-1.0.0/docs/"
		res.json({ specification });
	});

	return api;
}
