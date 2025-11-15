const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from Node.js Express!' });
});

app.get('/health', (req, res) => {
    res.json({ 
        status: 'ok', 
        service: 'nodejs-express',
        uptime: process.uptime()
    });
});

app.get('/api/info', (req, res) => {
    res.json({
        language: 'JavaScript',
        runtime: 'Node.js',
        framework: 'Express',
        version: '1.0.0'
    });
});

module.exports = app;