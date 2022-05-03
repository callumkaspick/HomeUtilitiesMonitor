const path = require('path')

module.exports = {
  port: process.env.PORT || 8081,
  
  db: {
    database: 'hum',
    user: process.env.DB_USER || 'hum',
    password: process.env.DB_PASS || 'hum',
    dialect: 'sqlite',
    options: {
      dialect: 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: path.resolve(__dirname, '../../hum.sqlite')
    }
  },
  test: {
    database: 'testhum',
    user: process.env.DB_USER || 'hum',
    password: process.env.DB_PASS || 'hum',
    dialect: 'sqlite',
    options: {
      dialect: 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: path.resolve(__dirname, '../../testhum.sqlite')
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
