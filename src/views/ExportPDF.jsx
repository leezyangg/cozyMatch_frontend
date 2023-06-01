import { PDFDocument, StandardFonts } from 'pdf-lib';

const ExportPDF = async (formData) => {
  // Destructure the form data
  const {
    tenancyStart,
    landlordName,
    landlordID,
    propertyAddress,
    tenantName,
    tenantID
  } = formData;

  try {
    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();

    // Add a new page to the PDF
    const page = pdfDoc.addPage();

    // Set the font and font size
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    page.setFont(font);
    page.setFontSize(15);

    // Get page dimensions
    const pageWidth = page.getWidth();
    const pageHeight = page.getHeight();

    // Write the form data to the PDF
    const content = [
      'TENANCY AGREEMENT',
      propertyAddress,
      'BETWEEN',
      landlordName,
      landlordID,
      'The Landlord',
      'AND',
      tenantName,
      tenantID,
      'The Tenant',
    ];

    const lineHeight = 40; // Assuming each line has a height of 20 units
    const contentHeight = content.length * lineHeight;

    // Calculate the y-coordinate for centering the content
    const startY = page.getHeight() - 50

    // Write the content to the PDF
    content.forEach((line, index) => {
      const textWidth = font.widthOfTextAtSize(line, 12);
      const startX = (pageWidth - textWidth) / 2;
      const y = startY - index * lineHeight;
      page.drawText(line, {
        x: startX,
        y,
      });
    });

    // Add page 2
    const page2 = pdfDoc.addPage();
    page2.setFont(font);
    page2.setFontSize(12);

    page2.drawText(`DATED ON ${tenancyStart}`, {
      x: 50,
      y: page2.getHeight() - 50,
    });

    page2.drawText('AGREEMENT', {
      x: 280,
      y: page2.getHeight() - 80,
    });

    page2.drawText('An agreement made the day and year described in Section 1 of the First Schedule annexed hereto (hereinafter referred to as the “First Schedule”) between the party described in Section 2 of the First Schedule (hereinafter referred to as “the Landlord”) of the one part and the party described in Section 3 of the First Schedule (hereinafter referred to as “the Tenant”) of the other part.', {
      x: 50,
      y: page2.getHeight() - 120,
      maxWidth: page2.getWidth() - 100,
    });

    page2.drawText('WHEREAS', {
      x: 50,
      y: page2.getHeight() - 260,
      maxWidth: page2.getWidth() - 100,
    });

    page2.drawText('a) The Landlord is the registered proprietor of all that parcel of premises comprising of provisional size as described in Section 4 of the First Schedule (hereinafter referred to as “the said Premises”)', {
      x: 50,
      y: page2.getHeight() - 310,
      maxWidth: page2.getWidth() - 100,
    });

    page2.drawText('b) The Landlord has agreed to let to the Tenant and the Tenant has agreed to take the whole of the said Premises (as more particularly described in Section 4 of the First Schedule) for a term as described in Section 5 the First Schedule at a monthly rent as described in Section 7 subject to the terms and conditions hereinafter appearing.', {
      x: 50,
      y: page2.getHeight() - 400,
      maxWidth: page2.getWidth() - 100,
    });

    // ... add more form data to the PDF ...

    // Save the PDF document as a blob
    const pdfBytes = await pdfDoc.save();

    // Create a data URL to view the PDF in the browser
    const dataUrl = URL.createObjectURL(new Blob([pdfBytes], { type: 'application/pdf' }));

    // Open the PDF in a new window for viewing
    const viewerWindow = window.open(dataUrl, '_blank');
    viewerWindow.document.title = `${tenantName}RA.pdf`;

    // Download the PDF with the filename tenantnameRA.pdf
    const downloadLink = document.createElement('a');
    downloadLink.href = dataUrl;
    downloadLink.download = `${tenantName}RA.pdf`;
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  } catch (error) {
    console.error('Error exporting PDF:', error);
  }
};

export default ExportPDF;
