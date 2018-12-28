const app = require('./app');

// api, middleware 등 express 설정과 http 설정을 분리한다.

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is on PORT ${PORT}`);
});

module.exports = app;
// for test
