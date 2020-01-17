import AssetModel from './assetModel';
import mongoose from 'mongoose';

export default {
  read: (req, res) => {
    AssetModel
    .exec((err, result) => {
      if (err) res.send(err);
      res.send(result);
    });
  },
  getOne: (req,res) => {
    if(!req.Asset) return res.send();
    AssetModel
    .findById(req.Asset._id)
    .exec((err, result) => {
      if (err) return res.send(err);
      res.send(result);
    });
  },
  create: function(req, res) {
    var asset = new AssetModel(req.body);
    asset.save((err, result) => {
      if (err) res.send(err);
      res.send(result);
    });
  },
  update: (req, res) => {
    AssetModel
    .findByIdAndUpdate(req.params.id, req.body, (err, result) => {
      if (err) return res.send(err);
      res.send(result);
    });
  },
  delete: (req, res) => {
    AssetModel
    .findByIdAndRemove(req.params.id, req.body, (err, result) => {
      if (err) res.send(err);
      console.log(req.params.id + " has been deleted");
      res.send(result);
    });
  }
};
