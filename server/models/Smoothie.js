const moongose =require('mongoose');

const SmoothieSchema = new moongose.Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    },
    instructions: {
        type: String,
        required: true
    },
    calories: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true,
      },
      reviews: {
        type: [String], // Array of URLs (strings) for review images
        default: [],
      },

})

const Smoothie= moongose.model('Smoothie', SmoothieSchema);

module.exports = Smoothie;