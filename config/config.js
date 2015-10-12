var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'test4'
    },
    port: 3000,
    db: 'mongodb://localhost/test4-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'test4'
    },
    port: 3000,
    db: 'mongodb://localhost/test4-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'test4'
    },
    port: 3000,
    db: 'mongodb://localhost/test4-production'
  }
};

module.exports = config[env];
