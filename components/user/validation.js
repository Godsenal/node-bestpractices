// validation은 빠르게 미리 처리하도록 하자.
// joi라는 라이브러리도 좋은듯.
const Joi = require('joi');

const userSchema = Joi.object().keys({
  id: Joi.number(),
  name: Joi.string().regex(/^[a-z][A-Z]$/),
});

function checkUser(req) {
  const { user } = req.body;
  Joi.assert(user, userSchema);
  // validation 맞지 않으면 알아서 에러를 던진다.
  // promise error가 아니기 때문에 error handler 미들웨어에서 캐치
  req.user = user;
}

module.exports = {
  checkUser,
};
