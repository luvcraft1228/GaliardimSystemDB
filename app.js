const db = require("./database");
const User = require("./database/models/user.model");
const manager = require("./manager");
const Post = require("./database/models/post.model");
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
