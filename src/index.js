const express = require("express");
const app = express();
const v1 = require("./routes/v1/indexRoutes");

//const auth = require("./utils/authentication");
const cors = require("cors");
/*const corOptions = {
  credentials: true,
  optionSuccessStatus: 200,
};*/

//Conectar
//rpalrodcommerceapi.onrender.com/v1/api/users
app.use(
  cors({
    origin: [
      "http://localhost:8080",
      "https://rpalrodcommerceapi.onrender.com/",
    ],
    credentials: false,
  })
);

app.use(express.json());
//app.use(auth.login)
app.use("/v1/api", v1.router);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`[INFO] Servidor escuchando en ${PORT} `);
});
