const HTTP_PORT = 3000;

const express = require("express");
const app = express();
const path = require("path");
const routes = require("./routes");

const db = require("./database");
const Habilete = require("./database/models/habilete.model");
const manager = require("./manager");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "pug");
app.use("/", routes);

app.listen(HTTP_PORT, () => {
  console.log(`serveur demarre sur port: ${HTTP_PORT}`);
});

db.connect(() => {
  console.log("Possibilité d'utiliser la base de donnée ici !");

  // manager.clearDatabase(() => {
  //   manager.createUser((user) => {
  //     // ici on a une nouvelle BD avec un User
  //     const newPost = new Post({
  //       content: "Come to the dark side...",
  //     });

  //     newPost
  //       .save()
  //       .then((post) => {
  //         user.posts.push(post);
  //         user.save();
  //         console.log("New post created", post);
  //       })
  //       .catch((err) => console.error(err));
  //   });
  // });
});
