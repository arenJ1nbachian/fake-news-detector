const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (_, res) => res.json({ ok: true }));

app.post("/analyze", (req, res) => {
  const { text } = req.body;

  res.json({
    score: 50,
    label: "questionable",
    reason: "Stub only - AI integration will come in the future!",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Backend running on http://localhost:${PORT}`)
);
