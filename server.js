
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

let users = [{ username: 'Meck177', password: 'Meck177@123', role: 'admin' }];

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.json({ message: 'Login successful', role: user.role });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    users.push({ username, password, role: 'user' });
    res.json({ message: 'User registered' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
