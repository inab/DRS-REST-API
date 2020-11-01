// PASSPORTS STRATEGY: SINGLE REALM: THIS DOESN'T WORK IN KC REALMS THAT MAKE USE OF THE RS512 SIG.

/*import KeycloakBearerStrategy from 'passport-keycloak-bearer';

let options = {
  "realm" : "****",
  "url" : "https://{KC_DOMAIN}/auth",
  "loggingLevel" : "debug",
  "algorithms" : ['RS512', 'RS256'] -> THIS FEATURE IS NOT CURRENTLY WORKING. ONLY ACCEPTING RS256 ALGO.
}
let passportData = new KeycloakBearerStrategy(options,  (jwtPayload, done) => {
  const user = jwtPayload;
  return done(null, user);
});

module.exports = passportData;*/