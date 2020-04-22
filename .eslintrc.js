module.exports = {
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018
    },
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "settings": {
        "react": {
            "version": "16.13.1",
            "flowVersion": "0.123.0"
        },
        "flowtype": {
            "onlyFilesWithFlowAnnotation": true
        }
    },
    "plugins": [
        "import",
        "react",
        "react-hooks",
        "jsx-a11y",
        "flowtype"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:flowtype/recommended",
        "plugin:jsx-a11y/recommended"
    ]
}