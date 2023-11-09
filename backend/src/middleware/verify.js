import jwt from 'jsonwebtoken';

const verify = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (authHeader) {
            const token = authHeader.split(' ')[1];
            jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
                if (err) {
                    return res.status(403).json('Token is not valid');
                }
                req.user = user;
                next();
            });
        }
    } catch (error) {
        res.status(401).json('Access Denied on verify');
    }
}

export default verify;