const Router = require('koa-router');
const { default: mongoose } = require('mongoose');
const posts = require('./posts');

const api = new Router();

api.use('/posts', posts.routes());

// 라우터를 내보냅니다.
module.exports = api;

// process.env 내부 값에 대한 레퍼런스 만들기
const { PORT, MONGO_URI } = process.env;
console.log(MONGO_URI + 'SSS');

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('connected to Mongodb');
  })
  .catch((e) => {
    console.error(e);
  });
