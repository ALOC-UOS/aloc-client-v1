//src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/ws',
    createProxyMiddleware({
      target: 'https://www.iflab.run',
      changeOrigin: true,
      ws: true,
      secure: false,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
  );

  app.use(
    '/api2',
    createProxyMiddleware({
      target: 'https://www.iflab.run',
      changeOrigin: true,
      secure: false,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
  );
};
