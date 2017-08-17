'use strict';
module.exports = function(app) {
  var birdData = require('../controllers/birdDataController');

  // Bird Routes
  app.route('/birds')
    .get(birdData.list_birds)
    .post(birdData.add_bird);


  app.route('/birds/:birdId')
    .get(birdData.get_bird)
    .put(birdData.update_bird)
    .delete(birdData.delete_bird);
};