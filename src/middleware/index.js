import request from 'request';

// Check access token passed as an auth header.
export default (req, res, next) => {
	if (req.headers.authorization) {
	  // KC config: Single realm.
	  const options = {
		method: 'GET',
		url: `https://{KC_DOMAIN}/auth/realms/{REALMNAME}/protocol/openid-connect/userinfo`,
		headers: {
		  Authorization: req.headers.authorization,
		},
	  };
  
	  // We could use axios too.
	  request(options, (error, response, body) => {
		if (error) throw new Error(error);
  
		if (response.statusCode !== 200) {
		  res.status(401).json({
			error: `unauthorized`,
		  });
		}
		// Valid token: Use the next MW function
		else {
		  next();
		}
	  });
	} else {
	  // Empty Auth header 
	  res.status(401).json({
	  error: `unauthorized`,
	});
  };
}