import express from "express";
import cors from "cors";
import * as deepl from "deepl-node";
import dotenv from "dotenv";

// Load .env variables
dotenv.config();

const app = express();
const PORT = 5000;

// Get API key from .env
const authKey = "56ab0e38-cec2-4931-b842-74fdb4dfa286:fx";
console.log("Hardcoded Auth Key:", authKey);

if (!authKey) {
  throw new Error("DEEPL_AUTH_KEY is missing in .env file");
}

const translator = new deepl.Translator(authKey);

app.use(cors());
app.use(express.json());

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
