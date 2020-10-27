var session = require('express-session');
var Keycloak = require('keycloak-connect');

var keycloakConfig = {
	"realm": "***",
	"auth-server-url": "https://domain/auth/",
	"ssl-required": "external",
	"resource": "***",
	"public-client": true,
	"confidential-port": 0
}

var memoryStore = new session.MemoryStore();
var keycloak = new Keycloak({ store: memoryStore }, keycloakConfig);

var sessionData = session({
    secret:'secret',
    resave: false,
    saveUninitialized: true,
    store: memoryStore
});

module.exports = {
    keycloak,
    sessionData
};