import UserModel from './userModel';
import mongoose from 'mongoose';

export default {
  login: (req, res) => res.send(),
  read: (req, res) => {
    UserModel
    .find(req.query)
    .exec((err, result) => {
      if (err) res.send(err);
      res.send(result);
    });
  },
  update: (req, res) => {
    UserModel
    .findByIdAndUpdate(req.params.id, req.body, (err, result) => {
      if (err) return res.send(err);
      res.send(result);
    });
  },
  delete: (req, res) => {
    UserModel
    .findByIdAndRemove(req.params.id, req.body, (err, result) => {
      if (err) res.send(err);
      console.log(req.params.id + " has been deleted");
      res.send(result);
    });
  },
  getme: function(req,res) {
    if(!req.User) return res.send();
    UserModel
    .findById(req.User._id)
    .exec((err, result) => {
      if (err) return res.send(err);
      res.send(result);
    });
  },
  logout: (req,res) => {
    var user = req.user.email
    req.logout();
    console.log(user + " has been logged out");
    res.send(user + " has been logged out");
  }
};
