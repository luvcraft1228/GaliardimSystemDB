const mongoose = require("mongoose");
const schema = mongoose.Schema(
  {
    nom: {
      type: String,
      required: true,
    },
    flavorText: {
      type: String,
    },
    description: {
      type: String,
    },
    frequence: {
      type: String,
    },
    portee: {
      type: String,
    },
    prerequis: {
      type: Array,
    },
    cout: {
      type: Number,
    },
  },
  { timestamp: true }
);

const Habilete = mongoose.model("Habilete", schema);
module.exports = Habilete;
