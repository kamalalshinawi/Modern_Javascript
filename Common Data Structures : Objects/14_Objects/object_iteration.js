let user = {
  name: "John",
  age: 30,
  city: "New York",
};

for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}
// Outputs:
// name: John
// age: 30
// city: New York





let product = {
  name: "Laptop",
  price: 999,
  inStock: true,
};

// Using Object.keys()
Object.keys(product).forEach((key) => {
  console.log(`${key}: ${product[key]}`);
});

// Using Object.values()
Object.values(product).forEach((value) => {
  console.log(value);
});

// Using Object.entries()
Object.entries(product).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
