const errorHandler = require('../../handlers/error');

// express 는 4개의 인자를 가지고 있는 라우트 콜백을 모두 error handler로 인식하고,
// 다른 라우트 콜백에서 next를 호출할 시, 다른 라우트 콜백은 넘어가고 이러한 error handler에 도달한다.
const userErrorHandler = async (err, req, res, next) => {
  await errorHandler(err);
  res.status(err.statusCode || 403).json({
    error: err.message,
  });
};

module.exports = userErrorHandler;
