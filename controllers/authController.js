import database from '../config/database.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import User from '../database/models/user.js';
import { createApiError } from '../middlewares/errors.js';

const login = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    !auth && next(createApiError(`Nie poprawne hasło`, 400));

    const accessToken = jwt.sign({ email: email }, process.env.TOKEN_SECRET, {
      expiresIn: 36000,
    });

    const refreshToken = jwt.sign(
      { email: email },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: 43200,
      },
    );

    res.cookie('JWT', accessToken, {
      maxAge: 86400000,
      httpOnly: true,
    });

    return res.status(200).send(user);
  }
  !auth && next(createApiError(`Nie poprwany e-mail`, 400));
};

const logout = (req, res) => {
  res.cookie('JWT', '', {
    maxAge: 1,
    httpOnly: true,
  });

  return res.status(200).send('Zostałeś wylogowany !');
};

const handleErrors = (err) => {
  // console.log(err.message, err.code);
  let errors = { email: '', password: '', nick: '', };

  // // incorrect email
  // if (err.message === 'incorrect email') {
  //   errors.email = 'That email is not registered';
  // }

  // // incorrect password
  // if (err.message === 'incorrect password') {
  //   errors.password = 'That password is incorrect';
  // }

  // // duplicate email error
  // if (err.code === 11000) {
  //   errors.email = 'that email is already registered';
  //   return errors;
  // }

  // validation errors
  if (err.message.includes('User validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      // console.log(properties);
      errors[properties.path] = properties.message;
    });
  }
  console.log(errors);

  return errors;
};

const signup = async (req, res, next) => {
  // !req.body.email && next(createApiError(`Brak e-maila`, 422));
  // !req.body.password && next(createApiError(`Brak hasła`, 422));
  // !req.body.nick && next(createApiError(`Brak nazwy`, 422));

  const { email, password, nick } = req.body;
  // console.log(req.body);

  try {
    // const user = await User.create({ email, password });
    const user = await User.create({ email, password, nick });
    res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }

  user &&
    next(
      createApiError(`Coś poszło nie tak, konto nie zostało utworzone !`, 500),
    );
  return res.status(200).send('Założyłeś konto !');
  // next();
};

export default { login, logout, signup };
