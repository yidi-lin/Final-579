export const translateText = async (text) => {
    try {
      const response = await fetch("https://libretranslate.com/translate", {
        method: "POST",
        body: JSON.stringify({
          q: text,
          source: "zh",
          target: "en",
          format: "text",
        }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (!response.ok) {
        throw new Error("Failed to connect to translation service.");
      }
  
      const data = await response.json();
  
      if (!data || !data.translatedText) {
        throw new Error("Translation service returned no result.");
      }
  
      return data.translatedText;
    } catch (error) {
      console.error("Translation error:", error.message);
      return "Translation failed. Please try again!";
    }
  };
  