'use strict';

var data = require('./data.json');
var find = require('lodash.find');

var methods = {
  countryCode: function(countryCode) {
    if (!countryCode) {
      throw new Error('Expected 1 country code as the first argument');
    }

    return find(data, function(country) {
      return country.code === countryCode.toUpperCase();
    });
  },

  get data() {
    return data;
  }
};

['emoji', 'code', 'name', 'unicode'].forEach(function(prop) {
  Object.defineProperty(methods, prop + 's', {
    get: function() {
      return data.map(function(country) {
        return country[prop];
      });
    }
  });
});

// TODO: figure out if this is a good idea
data.forEach(function(prop, index) {
  methods[prop.code] = data[index];
});

module.exports = methods;
