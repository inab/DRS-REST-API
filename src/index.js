import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import initDb from './db';
import routes from './routes';
import config from './configHttp';
import authMW from './middleware';
//import passport from 'passport';
//import passportData from './config';
//import tokenRequester from 'keycloak-request-token';
//import settings from './getTokens';

// 0) GET ACCESS TOKEN FOR TESTING:

//const baseUrl = 'https://inb.bsc.es/auth';
/*
tokenRequester(baseUrl, settings)
  .then((token) => {
    console.log(token);
  }).catch((err) => {
    console.log('err', err);
  });
*/

// 1) INITIALIZE EXPRESS APP.

let app = express();

app.server = http.createServer(app);

app.use(morgan('dev'));

app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
	limit : config.bodyLimit
}));

app.set('trust proxy', true);

// 2) APPLY CUSTOM AUTH MIDDLEWARE.

app.use(authMW);

initDb( db => {

	app.use('/ga4gh/drs/v1/', routes({ config, db }));

	app.server.listen(process.env.PORT || config.port, () => {
		console.log(`Started on port ${app.server.address().port}`);
	});

});

export default app;
