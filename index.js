module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  urles: {
    // error; 缩进2空格
    indent: [2, 2],
    // error; 结尾必须有分号
    semi: [2, 'never']
  }
};
