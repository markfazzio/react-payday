module.exports = {
    "presets": [
        [
            "@babel/preset-env",
            {
                "useBuiltIns": "usage",
                "corejs": {
                    "version": 3,
                    "proposals": false
                }
            }
        ],
        "@babel/preset-react",
        "@babel/preset-flow"
    ],
    "plugins": [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-syntax-dynamic-import",
        "babel-plugin-styled-components"
    ]
}