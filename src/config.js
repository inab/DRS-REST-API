import KeycloakBearerStrategy from 'passport-keycloak-bearer';

let options = {
  "realm" : "*",
  "url" : "*"
}
let passportData = new KeycloakBearerStrategy(options,  (jwtPayload, done) => {
  const user = jwtPayload;
  return done(null, user);
});

module.exports = passportData;


