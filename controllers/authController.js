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

const signup = async (req, res, next) => {
  // !req.body.email && next(createApiError(`Brak e-maila`, 422));
  // !req.body.password && next(createApiError(`Brak hasła`, 422));
  // !req.body.nick && next(createApiError(`Brak nazwy`, 422));

  const { email, password, nick } = req.body;
  console.log(req.body);

  const user = await User.create({ email, password, nick });

  // user &&
  //   next(createApiError(`Something went wrong, user wasn't create !`, 500));
  return res.status(200).send('Założyłeś konto !');
  // next();
};

export default { login, logout, signup };
