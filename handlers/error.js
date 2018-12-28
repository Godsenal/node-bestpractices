// 에러는 중앙에서 처리하도록 한다.

const sendEmail = message =>
  new Promise(res =>
    setTimeout(() => {
      console.log(`fake email: ${message}`);
      res();
    }, 1000),
  );

const errorHandler = async error => {
  // await checkIsCrutial();
  await sendEmail(error.message);
  return !!error.isOperational;
};

module.exports = errorHandler;
