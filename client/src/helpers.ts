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



// const exportChatToPDF = (chatHistory:) => {
//     const doc = new jsPDF();
//     const pageWidth: number = doc.internal.pageSize.getWidth();
//     let y: number = 18; // vertical offset for elements
//     let entryCounter = 0; // Initialize a counter for chat entries
  
//     doc.setFontSize(10); // Global font size
  
//     chatHistory.forEach((item, index) => {
//       // Prepare sender and message text
//       const senderText = `${item.sender === "user" ? "Me" : "PalmMedBot"}: `;
//       const messageText = item.message;
//       const maxLineWidth = pageWidth - 18; // Max line width for wrapping
  
//       // Set bold font for sender
//       doc.setFont('helvetica', 'bold');
//       doc.setTextColor(0, 0, 0);
//       doc.text(senderText, 10, y);
  
//       // Calculate the width of the sender text to align the first line of the message
//       const senderWidth = doc.getTextWidth(senderText);
  
//       // Adjust font settings based on the sender
//       if (item.sender === "user") {
//         // Bold font for "Me"
//         doc.setFont('helvetica', 'bold');
//         doc.setTextColor(0, 0, 0); // Keep text color black
//       } else {
//         // Normal font for "PalmMedBot"
//         doc.setFont('helvetica', 'normal');
//         doc.setTextColor(63, 63, 63); // Set grey color for "PalmMedBot"
//       }
  
//       // Split message text only into lines
//       const messageLines = doc.splitTextToSize(messageText, maxLineWidth - senderWidth);
  
//       // Print the first line of the message right after the sender
//       if (messageLines.length > 0) {
//         doc.text(messageLines[0], 10 + senderWidth, y);
//       }
  
//       // Print subsequent lines of the message
//       for (let i = 1; i < messageLines.length; i++) {
//         y += 5; // Maintain line height for wrapped lines
//         doc.text(messageLines[i], 10, y);
//       }
  
//       // Increment y for the next chat entry
//       y += 7;
//       entryCounter++; // Increment the entry counter
  
//       // Add additional space after every 2 entries
//       if (entryCounter % 2 === 0) {
//         y += 8; // Additional space after every two entries
//       }
//     });
  
//     doc.save("PalmGPT-history.pdf");
//   };


export const exportChatToPDF = (chatHistory: Array<{ sender: string; message: string }>): void => {
  const doc = new jsPDF();
  const pageWidth: number = doc.internal.pageSize.getWidth();
  let y: number = 18; // vertical offset for elements
  let entryCounter = 0; // Initialize a counter for chat entries

  doc.setFontSize(10); // Global font size

  chatHistory.forEach((item, index) => {
    // Prepare sender and message text
    const senderText = `${item.sender === "user" ? "Me" : "PalmMedBot"}: `;
    const messageText = item.message;
    const maxLineWidth = pageWidth - 18; // Max line width for wrapping

    // Set bold font for sender
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 0, 0);
    doc.text(senderText, 10, y);

    // Calculate the width of the sender text to align the first line of the message
    const senderWidth = doc.getTextWidth(senderText);

    // Adjust font settings based on the sender
    if (item.sender === "user") {
      // Bold font for "Me"
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0, 0, 0); // Keep text color black
    } else {
      // Normal font for "PalmMedBot"
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(63, 63, 63); // Set grey color for "PalmMedBot"
    }

    // Split message text only into lines
    const messageLines = doc.splitTextToSize(messageText, maxLineWidth - senderWidth);

    // Print the first line of the message right after the sender
    if (messageLines.length > 0) {
      doc.text(messageLines[0], 10 + senderWidth, y);
    }

    // Print subsequent lines of the message
    for (let i = 1; i < messageLines.length; i++) {
      y += 5; // Maintain line height for wrapped lines
      doc.text(messageLines[i], 10, y);
    }

    // Increment y for the next chat entry
    y += 7;
    entryCounter++; // Increment the entry counter

    // Add additional space after every 2 entries
    if (entryCounter % 2 === 0) {
      y += 8; // Additional space after every two entries
    }
  });

  doc.save("PalmGPT-history.pdf");
};
