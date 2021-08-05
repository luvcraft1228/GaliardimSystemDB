const mongoose = require("mongoose");

const protocol = "mongodb+srv";
const url = "cluster0.bs1wa.mongodb.net";
const params = "?retryWrites=true&w=majority";
const username = "GaliardimWebsite";
const password = "pw4gali";
const database = "GaliardimSystem";



const connectionString = `${protocol}://${username}:${password}@${url}/${database}${params}`;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useFindAndModify: false,
};

exports.connect = (callback) => mongoose
  .connect(connectionString, options)
  .then((db) => {
    console.log(`Connecté avec succès à la base ${database} sur ${ url }`);
    if(callback) callback()
  })
  .catch((err) => {
    console.log(err);
  });
