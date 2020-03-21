module.exports = {
  "env": {
      "browser": true,
      "node": true
  },
  "extends": ["airbnb", "airbnb/hooks", "plugin:import/errors", "plugin:import/warnings"],
  "rules": {
      "linebreak-style": 0,
      "no-tabs": 0,
      "semi": 0,
      "no-mixed-spaces-and-tabs": 0,
      "react-hooks/exhaustive-deps": 0,
      "react/jsx-filename-extension": 0,
      "import/no-extraneous-dependencies": 0,
      "import/prefer-default-export": 0,
      "import/no-cycle": 0,
      "react/jsx-indent": 0,
      "indent": ["error", 2]
  },
  "settings": {
      "import/extensions": [
          ".js",
          ".jsx"
      ]
  }
};
