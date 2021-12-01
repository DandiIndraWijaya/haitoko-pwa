const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  env: {
    mode: 'development',
    googleKey: '641376931164-qj5hmo6tnbr6osgo3pmkr8alv8p59rh4.apps.googleusercontent.com',
  },
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
});
