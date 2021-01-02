const jwtSecret = require('./jwtConfig');
const bcrypt = require('bcrypt');
const { User } = require('../database/models');

const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const passportJWT = require('passport-jwt');
const JWTStrategy =passportJWT.Strategy;

/**
 * The login strategy allows us to verify a set of login credentials.
 */
passport.use(
    'login',
    new localStrategy({
        usernameField: 'email',
        passwordField: 'password',
        session: false
    }, (username, password, done) => {
        try {
            User.findOne({
                where: {
                    email: username
                }
            }).then(user => {
                if (!user) {
                    return done({ message: 'incorrect email or password' }, false)
                }
                else {
                    bcrypt.compare(password, user.password).then(response => {
                        if (!response) {
                            return done({ message: 'incorrect email or password' }, false)
                        }
                        return done(null, user)
                    })
                }
            })
        }
        catch (err) {
            done(err);
        }
    })
)

/**
 * The JWT strategy allows us to verify the authenticity of a JWT token
 */
passport.use(
    'jwt',
    new JWTStrategy({
        jwtFromRequest: req =>  req.cookies ? req.cookies.jwt : null,
        secretOrKey: jwtSecret.secret
    },
    (jwtPayload, done) => {
        if (!jwtPayload) {
            console.log('No token')
            return done({ error: 'JWT missing' }, false);
        }
        else if (Date.now() > jwtPayload.expires) {
            console.log('Token expired')
            return done({ error: 'JWT expired' }, false);
        }
        return done(null, jwtPayload);
    }
    )
)