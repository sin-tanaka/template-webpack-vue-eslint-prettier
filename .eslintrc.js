module.exports = {
    "extends": [
        "google",
        'plugin:vue/recommended',
        "plugin:prettier/recommended"
    ],
    "rules": {
        "prettier/prettier": [
            "error",
            {
                "singleQuote": true,
                "trailingComma": "es5"
            }
        ]
    }
};