const errorHandler = require('./error');

module.exports = function handleUncaught() {
  process.on('unhandledRejection', error => {
    // uncaughedException을 handling 하고 있기 때문에 (밑에), 그냥 error를 throw 해준다.
    throw error;
  });

  // 제어가 되지 않는 에러가 발생했을 경우 프로그램을 재시작하는 것이 좋다.
  // forever 같은 재시작 라이브러리를 사용한다고 가정.
  process.on('uncaughtException', async error => {
    const isOpertaional = await errorHandler(error);
    if (!isOpertaional) {
      // shutdown 준비.
      process.exit(1);
    }
  });
};
