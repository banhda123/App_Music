import axios from "axios";

const GEMINI_API_KEY = "AIzaSyDMTEf69rEtoOxeJCSO3jLFjbYm6RACQW0";
const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`;

const buildRequestBody = (message) => ({
  contents: [
    {
      parts: [
        {
          text: message,
        },
      ],
    },
  ],
});

const extractResponseContent = (data) => {
  const candidates = data?.candidates || [];
  if (candidates.length > 0) {
    const content = candidates[0]?.content;
    if (content?.parts?.length > 0) {
      return content.parts[0].text.trim();
    }
  }
  return "Không tìm thấy phản hồi.";
};

const handleError = (error) => {
  console.error("Error fetching Gemini response:", error?.response?.data || error);
  return "Có lỗi xảy ra, vui lòng thử lại.";
};

export const fetchGeminiResponse = async (message) => {
  try {
    const response = await axios.post(GEMINI_ENDPOINT, buildRequestBody(message), {
      headers: { "Content-Type": "application/json" },
    });

    return extractResponseContent(response.data);
  } catch (error) {
    return handleError(error);
  }
};
