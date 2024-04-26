import jsPDF from "jspdf"

export const splitTextIntoLines = (text: string, doc: jsPDF, maxWidth: number): string[] => {
    const words = text.split(' ');
    let currentLine = words[0];
    const lines = [];

    for (let i = 1; i < words.length; i++) {
        const word = words[i];
        const width = doc.getStringUnitWidth(currentLine + " " + word) * doc.internal.getFontSize() / doc.internal.scaleFactor;
        if (width < maxWidth) {
            currentLine += " " + word;
        } else {
            lines.push(currentLine);
            currentLine = word;
        }
    }

    lines.push(currentLine);
    return lines;
};