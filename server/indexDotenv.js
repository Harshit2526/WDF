import express from 'express';
import path from 'paths';

import dotenv from 'dotenv';
dotenv.config();

import { fileURLToPath }
from 'url';
const app = express();
const PORT = process.env.PORT;
const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "portfolio.html"));

});
app.get('/harshit', (req, res) => {
    res.json({ "message": "Hi this is Harshit.." });
})

app.use(express.static(path.join(__dirname, "views")));
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});