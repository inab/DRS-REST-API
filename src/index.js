import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import initDb from './db';
import routes from './routes';
import config from './configHttp';
import middleware from './middleware';
import { keycloak, sessionData } from './config';

let app = express();

app.server = http.createServer(app);

app.use(morgan('dev'));

app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
	limit : config.bodyLimit
}));

app.use(sessionData);

app.use(keycloak.middleware());

app.set('trust proxy', true);

initDb( db => {

	app.use(middleware({ config, db }));

	app.use('/ga4gh/drs/v1', routes({ config, db, keycloak }));

	app.server.listen(process.env.PORT || config.port, () => {
		console.log(`Started on port ${app.server.address().port}`);
	});

});

export default app;
