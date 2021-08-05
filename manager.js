const Habilete = require("./database/models/habilete.model");

exports.clearDatabase = (callback) => {
  Habilete.deleteMany({})
    .then(() => {
      if (callback) callback();
    })
    .catch((err) => console.error(err));
};

exports.createHabilete = (callback) => {
  const newHab = new Habilete({
    name: '',
    email: "",
    password: "3",
  });

  newUser
    .save()
    .then((user) => {
      console.log("Un utilisateur a ete creer", user);
      if (callback) callback(user);
    })
    .catch((err) => console.error(err));
};
