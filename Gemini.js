import axios from "axios";

const GEMINI_API_KEY = "AIzaSyDMTEf69rEtoOxeJCSO3jLFjbYm6RACQW0";

export const fetchGeminiResponse = async (message) => {
  try {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`;

    const response = await axios.post(
      endpoint,
      {
        contents: [
          {
            parts: [
              {
                text: message,
              },
            ],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (
      response.data &&
      response.data.candidates &&
      response.data.candidates.length > 0 &&
      response.data.candidates[0].content &&
      response.data.candidates[0].content.parts &&
      response.data.candidates[0].content.parts.length > 0
    ) {
      return response.data.candidates[0].content.parts[0].text.trim();
    }

    return "Không tìm thấy phản hồi.";
  } catch (error) {
    console.error(
      "Error fetching Gemini response:",
      error?.response?.data || error
    );
    return "Có lỗi xảy ra, vui lòng thử lại.";
  }
};