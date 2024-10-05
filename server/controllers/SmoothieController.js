const Smoothie = require('../models/Smoothie')

const getAllSmoothies = async (req, res) =>{
    try {
        const smoothies = await Smoothie.find()
        res.json(smoothies)
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch smoothies' });
    }
}

module.exports ={
    getAllSmoothies
}