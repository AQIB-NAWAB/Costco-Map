// This is your test secret API key.
const connectDatabase = require('./config/DB');
const express = require('express');
const path=require("path")
const app = express();
app.use(express.json({
  limit: '50mb'
}));
const cors=require("cors")
app.use(cors())
const cloudinary=require("cloudinary")
connectDatabase()
cloudinary.config({
    cloud_name: "dvxvf2vxu",
    api_key: "639874394637477",
    api_secret: "9AreFo1Yt7utaBgmi1Rumx8gQ8Q",
  });
// shop Routes
const shopRoutes=require("./routes");
app.use("/",shopRoutes)

app.use(express.static(path.join(__dirname, "./client/dist")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/dist/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

app.listen(4242, () => console.log('Running on port 4242'));
