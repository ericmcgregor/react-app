'use strict'

Meteor.publish('people', function(options, searchString) {
  if(!searchString) {
    searchString = '';
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
