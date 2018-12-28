const { getUserById, insertUser } = require('./db');

// next 호출 시, error handler인 (인자가 4개인) 라우트 콜백으로 이동한다.
const get = async (req, res, next) => {
  const { id, fakeError } = req.query;
  // if (!id) {
  //   // fake system error (unhandledRejection)
  //   throw new Error('no id');
  // }
  try {
    if (fakeError) {
      const error = new Error('set fake error');
      error.isOperational = true;
      throw error;
    }
    const user = await getUserById({ id: parseInt(id, 10) });
    res.json({
      user,
    });
  } catch (err) {
    next(err);
  }
};

const post = async (req, res, next) => {
  const { user } = req.body;
  try {
    await insertUser({ user });
    res.json({
      success: true,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  get,
  post,
};
