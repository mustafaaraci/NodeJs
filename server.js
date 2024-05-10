//http modülü ile oluşturulan server birde express ile oluşturulan server sık kullanılan expresstir.

// request => server => response (olumlu yada olumsuz bir sonuç dönebilir.**http**)
//GET,POST,PUT-PATCH,DELETE ***HTTP METHOTS
const http = require("http");
const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.end("anasayfa");
      break;
    case "/about":
      res.end("hakkında");
      break;

    default:
      res.end("404 sayfa bulunamadı");
  }
});

server.listen(8000, () => {
  console.log("server başarılı olarak çalışmaya başladı");
});
