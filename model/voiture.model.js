const mongoose = require("mongoose");

const voitureSchema = mongoose.Schema({
  make: {
    type: String,
    required: [true, "Nom de make est obligatoire"],
  },
  model: {
    type: String,
    required: [true, "Nom du model est obligatoire"],
  },
  year: {
    type: Date,
    require: [true, "l année est obligatoire"],
  },
  transmission: {
    type: String,
    require: [true, "modele de transmition"],
  },
  fuelType: {
    type: String,
    require: [true, "modele de carburant"],
  },
  mileage: {
    type: Number,
  },
  price: {
    type: String,
    require: [true, "ajouter le prix"],
  },
  sales: {
    type: Number,
    default: 0,
  },
  country: {
    type: String,
    require: [true, "ajouter le pays"],
  },
  inStock: {
    type: Boolean,
  },
});
const voitureModel = mongoose.model("voitures", voitureSchema);

module.exports = voitureModel;
