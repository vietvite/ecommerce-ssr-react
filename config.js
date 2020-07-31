require('dotenv').config()

module.exports = {
  DB_URI: process.env.NODE_ENV === 'production' ? process.env.DB_URI_PROD : process.env.DB_URI_DEV,
  DB_OPTIONS: {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
}