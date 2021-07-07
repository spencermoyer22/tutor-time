const jwt = require('jsonwebtoken');

const secret = 'atotallyunknownsecret';
const expiration = '2h';

module.exports = {
    authMiddleware: function ({ req }) {
        // allow token to be sent via req.body, req.query, or headers
        let token = req.body.token || req.query.token || req.headers.authorization;

        // separate "Bearer" from token value
        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        if (!token) {
            return req;
        }

        try {
            // decode and attach user data to reuest object
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid token');
        }

        return req;
    },
    signToken: function ({ firstName, email, _id }) {
        const payload = { firstName, email, _id };

        return jwt.sign(
            { data: payload },
            secret,
            { expiresIn: expiration }
        );
    }
};
