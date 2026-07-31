import ai from "../config/gemini.js";

export const analyzeResume = async (resumeText) => {
  const prompt = `
You are an expert ATS Resume Analyzer.

Analyze the following resume and return ONLY valid JSON.

Resume:
${resumeText}

Return JSON exactly in this format:

{
  "atsScore": 85,
  "summary": "...",
  "strengths": [
    "...",
    "..."
  ],
  "weaknesses": [
    "...",
    "..."
  ],
  "missingSkills": [
    "...",
    "..."
  ],
  "suggestions": [
    "...",
    "..."
  ],
  "interviewQuestions": [
    "...",
    "...",
    "...",
    "...",
    "..."
  ]
}

Rules:
- Return ONLY valid JSON.
- Do not use markdown.
- Do not wrap the response inside \`\`\`.
- atsScore must be an integer between 0 and 100.
`;

  const response = await ai.models.generateContent({
    model: "gemini-flash-latest",
    contents: prompt,
  });

  let text = response.text;

  text = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  try {
    return JSON.parse(text);
  } catch (error) {
    throw new Error("Invalid AI response received.");
  }
};