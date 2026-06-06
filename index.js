const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const ENV = process.env.ENV_VALUE || "NO ENV SET";
const HOSTNAME = process.env.HOSTNAME || require("os").hostname();

app.get('/', (req, res) => {
    res.json({
        "message": "Hello, from Express server",
        "env":ENV,
        "container": HOSTNAME
    });
});

app.listen(PORT, () => { console.log(`Server is running on PORT: ${PORT}`)});