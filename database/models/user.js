import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import validator from 'validator';

const User = mongoose.Schema({
  email: {
    type: String,
    required: [true, 'E-mail jest wymagany'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Wprowadź e-mail'],
  },
  nick: {
    type: String,
    required: [true, 'Wprowadź poprawną nazwę użytkownika'],
    unique: true,
    lowercase: true,
    minlength: [6, 'Minimalna ilość znaków w nazwie to 6'],
  },
  password: {
    type: String,
    required: [true, 'Wprowadź hasło'],
    minlength: [6, 'Minimalna ilość znaków w haśle to 6'],
  },
});

User.pre('save', async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

export default mongoose.model('User', User);
