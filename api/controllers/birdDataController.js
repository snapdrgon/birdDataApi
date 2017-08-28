'use strict';
var mongoose = require('mongoose'),
  Bird = mongoose.model('Birds');

exports.list_birds = function(req, res) {
  Bird.find({}, function(err, bird) {
    if (err)
      res.send(err);
    res.json(bird);
  });
};

exports.add_bird = function(req, res) {
  var new_bird = new Bird(req.body);
  new_bird.save(function(err, bird) {
    if (err) {
   //   console.log(err);
      res.send(err);
    }
  // console.log(bird);
    res.json(bird);
  });
};


exports.get_bird = function(req, res) {
  Bird.findById(req.params.taskId, function(err, bird) {
    if (err)
      res.send(err);
    res.json(bird);
  });
};


exports.update_bird = function(req, res) {
  Bird.findOneAndUpdate({_id: req.params.birdId}, req.body, {new: true}, function(err, bird) {
    if (err)
      res.send(err);
    res.json(bird);
  });
};


exports.delete_bird = function(req, res) {
  Bird.remove({
    _id: req.params.birdId
  }, function(err, bird) {
    if (err)
      res.send(err);
    res.json({ message: 'Bird successfully deleted' });
  });
};

