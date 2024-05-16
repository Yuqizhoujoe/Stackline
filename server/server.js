import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint to get sales data
app.get('/sales', (req: Request, res: Response) => {
    const dataPath = path.join(__dirname, '../data/stackline_frontend_assessment_data_2021.json');

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

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
