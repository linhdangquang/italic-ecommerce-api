import mongoose from 'mongoose';
import isEmail from 'validator/lib/isEmail';
import {createHmac} from 'crypto';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, minlength: 3 },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate: [isEmail, 'Please fill a valid email address'],
  },
  password: { type: String, required: true, minlength: 6 },
});

userSchema.methods = {
  encryptPassword(password) {
    if (!password) return ;  
    try {
      return createHmac('sha256', this.password).update(password).digest('hex');
    } catch (error) {
      console.log(error);
    }
  }
}

userSchema.pre('save', function (next) {
 try {
  this.password = this.encryptPassword(this.password);
  next();
 } catch (error) {
   console.log(error);
 }
})

export default mongoose.model('User', userSchema);
