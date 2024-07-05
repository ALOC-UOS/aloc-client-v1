module.exports = {
  extends: ['react-app', 'react-app/jest', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': 'error',
    // 필요한 경우 여기에 추가 규칙을 작성하세요
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};