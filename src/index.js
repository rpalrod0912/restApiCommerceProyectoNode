const express = require("express");
const app = express();
const v1 = require("./routes/v1/indexRoutes");

//const auth = require("./utils/authentication");
const cors = require("cors");

//Conectar
//rpalrodcommerceapi.onrender.com/v1/api/users
app.use(cors());
app.use(express.json());
//app.use(auth.login)
app.use("/v1/api", v1.router);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`[INFO] Servidor escuchando en ${PORT} `);
});
