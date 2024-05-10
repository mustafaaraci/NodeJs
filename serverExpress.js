const express = require("express");
const fs = require('fs');
const app = express();
app.use(express.static("public"));

app.set("view engine", "ejs");
//GET,POST,PUT-PATCH,DELETE ***HTTP METHOTS

const products = [
  {
    name: "telefon",
    id: 0,
    price: 200,
  },
  {
    name: "bilgisayar",
    id: 1,
    price: 400,
  },
  {
    name: "tablet",
    id: 2,
    price: 300,
  },
];

app.listen(8000, () => {
  console.log("server ayaga kalktı  8000 portunda");
});

app.use("/", (req, res, next) => {
  console.log("bu bir middleware -ara yazılım");
  next();
});

app.use("/", (req, res) => {
  // res.json({ products: products });
  res.render("products", { products: products });
});



app.use("/detail/:id", (req, res) => {
  const detailProduct = products.find((pr) => pr.id == req.params.id);
  res.render("detail", { detailProduct });
});










// app.use("/json", (req, res) => {
//   res.json({ message: "burası json dosyası döndü" });
// });

// app.use("/about", (req, res) => {
//   res.send("burası express ile oluşan hakkında sayfası");
// });

// app.use("/", (req, res) => {
//   res.send("burası express ile oluşan anasayfa");
// });
