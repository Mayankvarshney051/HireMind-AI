import fs from "fs/promises";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";

export const extractTextFromPDF = async (filePath) => {
  try {

    const buffer = await fs.readFile(filePath);

    const loadingTask = pdfjsLib.getDocument({
      data: new Uint8Array(buffer),
    });

    const pdf = await loadingTask.promise;

    let text = "";

    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
      const page = await pdf.getPage(pageNumber);

      const textContent = await page.getTextContent();

      const pageText = textContent.items
        .map((item) => (item.str ? item.str : ""))
        .join(" ");

      text += pageText + "\n";
    }

    return text.trim();
  } catch (error) {
    console.error("❌ PDF Extraction Error:", error);
    throw new Error("Failed to extract text from PDF.");
  }
};