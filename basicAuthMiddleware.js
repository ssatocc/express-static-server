const basicAuth = require('express-basic-auth');

const basicAuthMiddleware = basicAuth({
    challenge: true,
    unauthorizedResponse: 'unauthorized',
    authorizer: (username, password) => {
        const userMatch = basicAuth.safeCompare(username, process.env.BASIC_AUTH_USER);
        const passMatch = basicAuth.safeCompare(password, process.env.BASIC_AUTH_PASSWORD);
        return userMatch && passMatch;
    }
});

module.exports = basicAuthMiddleware;
