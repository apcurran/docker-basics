import express from "express";

const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json([
        { id: 1, title: "Hamlet" },
        { id: 2, title: "Macbeth" },
        { id: 3, title: "Romeo and Juliet" },
        { id: 4, title: "A Midsummer Night's Dream" },
        { id: 5, title: "Othello" }
    ]);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});