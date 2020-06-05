/*
let value;

value = Math.PI;
console.log(value.toFixed(2));

value = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
value = Math.max(15, 11, 16, 12, 51, 12, 13, 51);

value = Math.random();
console.log(value.toFixed(2));


value = 0.6 + 0.7;
value = 10;
console.log(+value.toFixed(1));

value = parseInt("100$");
console.log(value);

const firstName = 'Pidor';
const lastName = 'Ebannii';
const age = 101;

let str;

str = '<ul>' +
        '<li>First Name: ' + firstName + '</li>' +
        '<li>Last Name: ' + lastName + '</li>' +
        '<li>Age: ' + age + '</li>' +
      '</ul>';

//console.log(str);
str = `
<ul>
  <li>First Name: ${firstName}</li>
  <li>last Name: ${lastName}</li>
  <li>Age: ${age}</li>
</ul>
`;

document.body.innerHTML = str;
*/
const user = {
  name: 'Pidor',
  age: 101,
  isAdmin: true,
  email: 'pizda@pizda.com',
  'user-address': {
    city: 'Eblo',
    street: 'Jopa'
  },
  skills: ['html', 'css', 'js']
}; 

let value;
let prop = 'skills';

value = user.name;
value = user['user-address'];
value = user['user-address'].city;
value = user['user-address']['city'];
value = user[prop][0];

const prod = {
  product: 'iphone'
}
prod.price = 1000;
prod.currency = 'dollar';
prod.details = {};
prod.details.model = 'Pizda';
prod.details.color = 'blue';

console.log(prod);




























