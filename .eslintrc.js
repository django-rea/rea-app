const path = require('path')

module.exports = {
  "root": true,
  "parser": "babel-eslint",
  "extends": [
    "airbnb"
  ],
  "plugins": [
    "no-unused-vars-rest",
    "import"
  ],
  "env": {
    "browser": true
  },
  "globals": {
    "__DEV__": true,
    "__PROD__": true,
    "__DEBUG__": true,
    "__COVERAGE__": true,
    "__BASENAME__": true,
    "Generator": true,    // for FlowType compat
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": path.resolve(__dirname, "./webpack/webpack.config.js")
      }
    }
  },
  "rules": {
    "semi": [2, "never"],
    "comma-dangle": [2, "always-multiline"],
    "max-len": 0,
    "no-shadow": 0,
    "arrow-body-style": 0,
    "arrow-parens": 0,
    "global-require": 0,
    "no-unused-expressions": 0,
    "no-confusing-arrow": 0,
    "no-unused-vars": 0,
    "no-constant-condition": 0,
    "jsx-a11y/html-has-lang": 0,
    "import/no-dynamic-require": 0,
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0,
    "import/extensions": 0,
    "react/require-default-props": 0,
    "react/forbid-prop-types": 0,
    "react/no-unused-prop-types": 0,
    "react/no-array-index-key": 0,
    "react/jsx-filename-extension": [2, {"extensions": [".js", ".jsx"]}],
    "react/jsx-first-prop-new-line": 0,
    "no-unused-vars-rest/no-unused-vars": [2, {"ignoreDestructuredVarsWithRest": true}],
    "jsx-quotes": 0,
    "quotes": 0
  }
}
