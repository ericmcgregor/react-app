'use strict'

Meteor.publish('people', function(options={}, searchString) {
  if(!searchString) {
    searchString = '';
  }
  if(!options.sort) {
    options.sort= {
        date_created: -1
      }
  }
  Counts.publish(this, 'numberOfPeople', People.find({
    'name': {
      '$regex': '.*' + searchString || '' + '.*',
      '$options': 'i'
    }
  }), {noReady: true});
  return People.find({
    'name': {
      '$regex': '.*' + searchString || '' + '.*',
      '$options': 'i'
    }
  }, options);
});
