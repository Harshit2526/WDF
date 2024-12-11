const express = require("express");
const app = express();
const PORT = 3000;

app.get("/harshit", (req, res) => {
    res.sendFile(__dirname + "/views/portfolio.html");

});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});