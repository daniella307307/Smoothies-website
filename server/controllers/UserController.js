const User = require('../models/User'); // Make sure this path is correct
const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken');

const register = async (req, res) => {
    const { name, username, email, password, confirmPassword } = req.body;

    const userExists = await User.findOne({ email, username }); // Ensure you use an object for the query
    if (userExists) {
        return res.status(400).json({ message: "User found in the database" });
    }

    try {
        if (password === confirmPassword) {
            const hashedPassword = await bcrypt.hash(password, 10); // Add a salt rounds parameter
            const user = new User({ name, username, email, password: hashedPassword });
            await user.save();
            const token = jwt.sign({ id: user._id, email: user.email }, process.env.JSONWEBTOKEKEY, { expiresIn: '1h' });
            return res.status(200).json({ message: "User registered successfully", token });
        } else {
            return res.status(400).json({ message: "Passwords do not match" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
};
const login = async (req, res) => {
    const { identifier, password } = req.body;

    try {
        const user = await User.findOne({
            $or: [{ username: identifier }, { email: identifier }]
        });

        if (!user) {
            return res.status(400).json({ message: "Invalid username or email" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }

        // Create JWT token
        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JSONWEBTOKEKEY, { expiresIn: '1h' });

        // Send response with status code and message
        res.status(200).json({ message: 'Logged in successfully', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    register,
    login
};
