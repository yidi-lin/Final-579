import express from "express";
import cors from "cors";
import * as deepl from "deepl-node";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 5000;

// Set up CORS with specific origin or allow all origins
app.use(
  cors({
    origin: "*", // Use "*" for all origins or specify your React app's URL
    methods: "GET,POST", // Allow only necessary methods
    allowedHeaders: "Content-Type,Authorization", // Allow only necessary headers
  })
);

app.use(express.json());

const authKey = process.env.REACT_APP_DEEPL_API_KEY;
if (!authKey) {
  console.error("DEEPL_API_KEY is not set in the .env file!");
  process.exit(1);
}

const translator = new deepl.Translator(authKey);

app.post("/translate", async (req, res) => {
  const { text, targetLang } = req.body;

  try {
    const result = await translator.translateText(text, null, targetLang);
    res.json({ translation: result.text });
  } catch (error) {
    console.error("Translation failed:", error);
    res.status(500).send("Translation failed.");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
