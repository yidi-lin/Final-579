const translateText = async (text) => {
  try {
    const response = await fetch("https://api-free.deepl.com/v2/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        auth_key: process.env.REACT_APP_DEEPL_API_KEY, // Ensure this matches your .env key
        text: text,
        target_lang: "EN", // Adjust as needed
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.translations[0].text;
  } catch (error) {
    console.error("Error during translation:", error);
    return "Translation failed. Please try again.";
  }
};

export { translateText };
