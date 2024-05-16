const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());

app.use('/static', express.static(path.join(__dirname, './public')));

// Endpoint to get sales data
app.get('/sales', (req, res) => {
    const dataPath = path.join(__dirname, 'data', 'stackline_frontend_assessment_data_2021.json');

    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).send('Error reading file');
        }

        try {
            const jsonData = JSON.parse(data);
            res.json(jsonData);
        } catch (err) {
            console.error('Error parsing JSON:', err);
            res.status(500).send('Error parsing JSON');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
