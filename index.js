const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use(cors());

app.get('/test', async (req, res) => {
    res.send("This API is working");
});


// demander au serveur applicatif d'attendre des requêtes depuis le port spécifié plus haut
app.listen(PORT, () => {
  console.log(`Example app listening at http://https://benevold.herokuapp.com/:${PORT}`);
});
