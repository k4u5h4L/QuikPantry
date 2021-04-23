// import faker from "faker";

// console.log(faker.commerce.product);

// export const data = {
//     name: faker.commerce.productName,
//     price: faker.commerce.price,
//     desc: faker.commerce.productDescription,
//     adj: faker.commerce.productAdjective,
// };

const faker = require("faker");

// var randomName = faker.name.findName(); // Rowan Nikolaus
// var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
// var randomCard = faker.helpers.createCard(); // random contact card containing many properties

// console.log(faker.commerce.product());

console.log({
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    desc: faker.commerce.productDescription(),
    adj: faker.commerce.productAdjective(),
});

module.exports = {
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    desc: faker.commerce.productDescription(),
    adj: faker.commerce.productAdjective(),
};
