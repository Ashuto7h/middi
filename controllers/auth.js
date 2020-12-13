const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { secret } = require('../auth/jwtConfig');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const db = require('../database/models');

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    const hashCost = 10;
    console.log(req.body);
    try {
      const hash = await bcrypt.hash(password, hashCost);
      await db.User.create({
        name,
        email,
        password: hash
      });
      const expires = Date.now() + 24 * 60 * 60 * 60 * 7
      const payload = {
        name,
        email,
        expires
      }
      req.login(payload, { session: false }, error => {
        if (error) {
          console.log('Error logging in: ', err);
          res.status(400).send({ error })
        }
        const token = jwt.sign(JSON.stringify(payload), secret);
        res.cookie('jwt', token, { 
          httpOnly: true, 
          secure: process.env.NODE_ENV === 'production',
          maxAge: expires
        });
        res.status(200).send({ name, email });
      });
    }
    catch (err) {
      console.log(err);
      res.status(400).send({
        error: 'Bad request'
      });
    }
});
  
router.post('/login', async (req, res) => {
  await passport.authenticate(
    'login',
    { session: false },
    (err, user) => {
      if (err || !user) {
        console.log('Error authenticating user: ', err);
        res.status(200).json({ err });
      }

      const expires = Date.now() + 24 * 60 * 60 * 60 * 7
      const payload = {
        name: user.name,
        email: user.email,
        expires
      }
      req.login(payload, { session: false }, error => {
        if (error) {
          console.log('Error logging in: ', err);
          res.status(400).send({ error })
        }
        const token = jwt.sign(JSON.stringify(payload), secret);
        res.cookie('jwt', token, { 
          httpOnly: true, 
          secure: process.env.NODE_ENV === 'production',
          maxAge: expires
        });
        const { name, email } = user;
        res.status(200).send({ name, email });
      });
    }
  )(req, res)
})
  
router.get(
  '/auth-user', 
  (req, res) => {
    passport.authenticate(
      'jwt', 
      { session: false },
      (err, user) => {
        res.status(200).send({ user });
      })(req, res)
});

module.exports = router;