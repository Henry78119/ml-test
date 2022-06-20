import express from "express";
import cors from "cors";

const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 4000;
app.set("port", PORT);

//Corregir require() of ES modules is not supported
require("module").Module._extensions[".js"] = function (
  module: any,
  filename: any
) {
  module._compile(require("fs").readFileSync(filename, "utf8"), filename);
};

//Middleware
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

//Routes
app.use(require("./routes/product.routes"));

// Configurar cabeceras y CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method,access-token"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT");
  res.header("Allow", "GET, POST, PUT");
  next();
});

app.listen(app.get("port"), () => {
  console.log("Server running in port " + app.get("port"));
});
