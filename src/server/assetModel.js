import mongoose from 'mongoose';

var Asset = new mongoose.Schema({
  date: {type: String, required:true},
  construction: {type: String, required:true}
});
export default Asset;
