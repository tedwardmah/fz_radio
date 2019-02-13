module.exports = {
    "extends": "airbnb-base",
    "env": {
      "node": true,
      "mocha": true
    },
    "plugins": [
      "chai-friendly"
    ],
    "rules": {
      "no-underscore-dangle": "off",
      "no-unused-expressions": "off",
      "chai-friendly/no-unused-expressions": "error"    
    }
  };