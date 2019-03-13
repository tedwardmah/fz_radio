module.exports = {
    "extends": "airbnb",
    "globals": {
        "document": true,
        "window": true,
        "fetch": true
    },
    "overrides": [
        {
            files: [
              "**/*.test.jsx",
              "**/*.test.js"
            ],
            env: {
              jest: true 
            },
            plugins: ["jest"]
          }
    ],
    "parser": "babel-eslint",
    "rules": {
        "no-underscore-dangle": "off"
    },
    "settings": {
        "import/parser": "babel-eslint"
    }
};