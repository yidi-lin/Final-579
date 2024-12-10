const translateText = async (text) => {
  try {
    const response = await fetch("http://localhost:5000/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text,
        sourceLang: "ZH",
        targetLang: "EN",
      }),
    });

    if (!response.ok) {
      throw new Error("Translation request failed");
    }

    const data = await response.json();
    return data.translation;
  } catch (error) {
    console.error("Error during translation:", error);
    return "Translation failed. Please try again.";
  }
};

export { translateText };
