const math = require("./math");
const { add, sum } = require("./math");
math;

console.log(add, sum);
console.log(sum(3, 5));
console.log(add(2, 4) + sum(3, 1));
console.log(add(40, 10));

const fs = require("fs");
//sync
//fs.writeFileSync("navbar.jsx", "test");
//async
//fs.writeFile("header.jsx", "test", (err) => {});

//const a = fs.readFileSync("./header.jsx", "utf-8");
//console.log(a);

//const b = fs.readFile("./navbar.jsx", "utf-8", (err, data) => {console.log(data);});
/*
fs.appendFileSync("navbar.jsx", "aliyi ekledim"); // **içersine veri ekledik

fs.unlinkSync("header.jsx"); //  **silme işlemi yaptık

fs.mkdirSync("image");  //klasör ekledik   */
