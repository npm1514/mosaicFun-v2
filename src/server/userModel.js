import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';
import Asset from './assetModel';

var User = new mongoose.Schema({
  password: {type: String, required: true},
  email: {type: String, required: true},
  firstname: {type: String, required: false},
  lastname: {type: String, required: false},
  assets: [Asset]
});

User.methods.generateHash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

User.methods.validPassword = (password) => bcrypt.compareSync(password, this.password);

export default mongoose.model('User', User);
