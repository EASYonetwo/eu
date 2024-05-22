const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/',
    createProxyMiddleware({
      target: 'https://localhost:8073',
      changeOrigin: true,
      secure: false, // 이 옵션을 통해 인증서 검증을 우회할 수 있습니다.
    })
  );
};
