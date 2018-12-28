const { user: userDB } = require('../fakeDB');

// db layer에서는 따로 에러핸들링을 하지 않는다.

const getUserById = async ({ id }) => {
  try {
    const user = await userDB.findById(id);
    return user;
  } catch (err) {
    const error = new Error('Error in getUserById');
    error.isOperational = true;
    throw error;
  }
};

const insertUser = async ({ user }) => {
  await userDB.insert(user);
};

module.exports = {
  getUserById,
  insertUser,
};
