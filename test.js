'use strict';

var assert = require('assert');
var emojiFlags = require('./');

describe('getter methods', function(){
  it('data', function() {
    assert.equal(emojiFlags.data.length, 249);


    assert.equal(emojiFlags.data[2].name, 'Afghanistan');
  });

  it('emojis', function() {
    assert.equal(emojiFlags.emojis.length, 249);

    assert.equal(emojiFlags.emojis[76], '🇬🇧');
  });

  it('codes', function() {
    assert.equal(emojiFlags.codes.length, 249);

    assert.equal(emojiFlags.codes[200], 'SJ');
  });

  it('names', function() {
    assert.equal(emojiFlags.names.length, 249);

    assert.equal(emojiFlags.names[150], 'Mauritania');
  });

  it('unicodes', function() {
    assert.equal(emojiFlags.unicodes.length, 249);

    assert.equal(emojiFlags.unicodes[101], 'U+1F1EE U+1F1EA');
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
