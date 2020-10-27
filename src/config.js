var session = require('express-session');
var Keycloak = require('keycloak-connect');

var keycloakConfig = {
	"realm": "IPC",
	"auth-server-url": "****",
	"ssl-required": "external",
	"resource": "****",
	"public-client": true,
	"confidential-port": 0
}

var memoryStore = new session.MemoryStore();
var keycloak = new Keycloak({ store: memoryStore }, keycloakConfig);

var sessionData = session({
    secret:'3378y83e',
    resave: false,
    saveUninitialized: true,
    store: memoryStore
});

module.exports = {
    keycloak,
    sessionData
};