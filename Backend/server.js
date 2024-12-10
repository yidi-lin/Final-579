import express from "express";
import cors from "cors";
import * as deepl from "deepl-node";
import dotenv from "dotenv";

// Load .env variables
dotenv.config();

const app = express();
const PORT = 5001;

// Get API key from .env
const authKey = process.env.DEEPL_AUTH_KEY;
console.log("Loaded Auth Key:", authKey);

if (!authKey) {
  throw new Error("DEEPL_AUTH_KEY is missing in .env file");
}


const translator = new deepl.Translator(authKey);

app.use(cors({
  origin:'https://yidi-lin.github.io/Final-579/', // Replace with your frontend URL
  methods: "GET,POST",
  allowedHeaders: "Content-Type",
}));
app.use(express.json());


app.post("/translate", async (req, res) => {
  const { text, targetLang } = req.body;

  if (!text || !targetLang) {
    res.status(400).send("Invalid request payload.");
    return;
  }
  
  try {
    const result = await translator.translateText(text, null, targetLang === 'en' ? 'en-GB' : targetLang);
    res.json({ translation: result.text });
  } catch (error) {
    console.error("Translation failed:", error);
    res.status(500).send("Translation failed.");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
