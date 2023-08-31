const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");

const fruitSchema = new mongoose.Schema ({
    name: String,
    rating: Number,
    review: String
});

//create a new collection for fruit
const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "good"
});

//save fruit docuemtn in a Fruit collection into a fruitsSB
fruit.save();