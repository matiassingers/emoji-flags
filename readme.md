# emoji-flags [![Build Status](http://img.shields.io/travis/matiassingers/emoji-flags.svg?style=flat-square)](https://travis-ci.org/matiassingers/emoji-flags) [![Dependency Status](http://img.shields.io/gemnasium/matiassingers/emoji-flags.svg?style=flat-square)](https://gemnasium.com/matiassingers/emoji-flags)
> return emoji flag symbol for country code

## Install

```sh
$ npm install --save emoji-flags
```


## Usage

```js
var emojiFlags = require('emoji-flags');

// single country lookup by code
emojiFlags.countryCode('DK');
// => { "code": "DK", "emoji": "🇩🇰", ... }

// entire dataset
emojiFlags.data();
```


## CLI

```sh
$ npm install --global emoji-flags
```

```sh
$ emoji-flags --help

  return emoji flag symbol for country code

  Example
    emoji-flags gb

    emoji-flags dk --verbose

    emoji-flags
    => returns the entire dataset
```


## API

### `countryCode`

#### Option

Type: `String`  
Default: `undefined`

Takes an [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code, and returns country details:
```json
{
    "code": "DK",
    "emoji": "🇩🇰",
    "unicode": "U+1F1E9 U+1F1F0",
    "name": "Denmark",
    "title": "flag for Denmark"
}
```

### Getters

The module exposes a bunch of simple getter methods:
- `data` - returns the entire dataset
- `emojis` - returns an array of all emojis
- `codes` - returns an array of all country codes
- `names` - returns an array of all country names
- `unicodes` - returns an array of all emojis reprensented as unicode

Getter methods for all country codes:
```js
emojiFlags.GB;
// => {
//      "code": "GB",
//      "emoji": "🇬🇧",
//      "unicode": "U+1F1EC U+1F1E7",
//      "name": "United Kingdom",
//      "title": "flag for United Kingdom"
//    }
```


## License

MIT © [Matias Singers](http://mts.io)
