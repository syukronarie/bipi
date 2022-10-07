import express from "express";

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
	res.send("Hello from Express Bipi!");
});

app.listen(PORT, () => console.log(`running server on port ${PORT}`));
