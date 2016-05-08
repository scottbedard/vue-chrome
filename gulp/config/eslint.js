export default {
    fix: false,
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: { },
    },
    plugins: [
        "html",
        "vue",
    ],
    rules: {
        "comma-dangle": ["error", "always-multiline"],
        "indent": ["error", 4],
        "semi": ["error", "always"],
        "quotes": ["error", "double", { avoidEscape: true, allowTemplateLiterals: true }],
    },
};
