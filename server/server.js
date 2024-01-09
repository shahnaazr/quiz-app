const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

app.get("/api-token", async (req, res) => {
  try {
    const response = await axios.get("https://opentdb.com/api_token.php?command=request");
    const { token } = response.data;
    res.json({ token });
  } catch (error) {
    console.error("Error requesting API token:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/categories", async (req, res) => {
  try {
    const response = await axios.get("https://opentdb.com/api_category.php");
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching trivia categories:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/trivia", async (req, res) => {
  try {
    const { amount, type, difficulty, category } = req.query;
    const response = await axios.get("https://opentdb.com/api.php", {
      params: {
        amount: amount || 10,
        type: type || "multiple",
        difficulty: difficulty || "easy",
        category: category || "9",
      },
    });

    res.json(response.data);
  } catch (error) {
    if (!error.message.includes("429")) {
      console.error("Error fetching trivia questions:", error.message);
      res.status(500).json({ error: error.message });
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
