const users = [];
const products = [];

const delay = (ms = 1000) => new Promise(res => setTimeout(res, ms));
module.exports = {
  user: {
    async findById(id) {
      await delay();
      return users.find(user => {
        return user.id === id;
      });
    },
    async insert(user = {}) {
      await delay();
      return users.push(user);
    },
  },
  product: {
    async findById(id) {
      await delay();
      return products.find(product => product.id === id);
    },
    async insert(product = {}) {
      await delay();
      return products.push(product);
    },
  },
};
