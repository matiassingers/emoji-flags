'use strict';

var assert = require('assert');
var emojiFlags = require('./');

describe('getter methods', function(){
  it('data', function() {
    assert.equal(emojiFlags.data.length, 251);


    assert.equal(emojiFlags.data[2].name, 'Afghanistan');
  });

  it('emojis', function() {
    assert.equal(emojiFlags.emojis.length, 251);

    assert.equal(emojiFlags.emojis[77], '🇬🇧');
  });

  it('codes', function() {
    assert.equal(emojiFlags.codes.length, 251);

    assert.equal(emojiFlags.codes[201], 'SJ');
  });

  it('names', function() {
    assert.equal(emojiFlags.names.length, 251);

    assert.equal(emojiFlags.names[151], 'Mauritania');
  });

  it('unicodes', function() {
    assert.equal(emojiFlags.unicodes.length, 251);

    assert.equal(emojiFlags.unicodes[102], 'U+1F1EE U+1F1EA');
  });

  it('country code getters', function() {
    assert(emojiFlags.DK);

    assert.equal(emojiFlags.DK.emoji, '🇩🇰');
  });
});

describe('getter methods', function(){
  it('should handle no country code passed', function() {
    assert.throws(function() {
      emojiFlags.countryCode();
    }, /Expected/);
  });

  it('should return country object', function() {
    var result = emojiFlags.countryCode('dk');

    assert.equal(result.code, 'DK');
    assert.equal(result.emoji, '🇩🇰');
  });
});
