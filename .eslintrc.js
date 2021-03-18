module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'comma-dangle': 'off',
    semi: 'off',
    'no-inline-styles': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'react-native/no-inline-styles': 'off',
    'max-len': [1, { code: 100 }]
  }
}
