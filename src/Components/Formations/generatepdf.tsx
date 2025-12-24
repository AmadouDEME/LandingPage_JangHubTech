import { jsPDF } from "jspdf";
export interface Formation {
  title: string;
  description: string;
  duration: string;
  level: string;
  price: string;
  points: string[];
}

export const generatePDF = (formation: Formation): void => {
  const doc = new jsPDF("p", "mm", "a4");

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  const margin = 20;
  let y = margin;

  const green: [number, number, number] = [0, 196, 140];
  const dark: [number, number, number] = [11, 15, 25];
  const gray: [number, number, number] = [60, 60, 60];

  /* ================= HEADER ================= */
  doc.setFillColor(...green);
  doc.rect(0, 0, pageWidth, 40, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(255, 255, 255);
  doc.text("PROGRAMME DE FORMATION", margin, 25);

  /* ================= TITLE ================= */
  y = 55;
  doc.setFontSize(18);
  doc.setTextColor(...dark);
  doc.text(formation.title, margin, y);

  doc.setDrawColor(...green);
  doc.setLineWidth(0.5);
  doc.line(margin, y + 5, pageWidth - margin, y + 5);

  /* ================= DESCRIPTION ================= */
  y += 15;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(...gray);

  const description = doc.splitTextToSize(
    formation.description,
    pageWidth - margin * 2
  );
  doc.text(description, margin, y);
  y += description.length * 7 + 10;

  /* ================= INFO BOXES ================= */
  const boxWidth = 50;
  const boxHeight = 20;
  const gap = 10;

  const drawInfoBox = (title: string, value: string, x: number) => {
    doc.setFillColor(248, 249, 250);
    doc.roundedRect(x, y, boxWidth, boxHeight, 3, 3, "F");

    doc.setFontSize(8);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...green);
    doc.text(title, x + 5, y + 7);

    doc.setFontSize(10);
    doc.setTextColor(...dark);
    doc.text(value, x + 5, y + 14);
  };

  drawInfoBox("DURÉE", formation.duration, margin);
  drawInfoBox("NIVEAU", formation.level, margin + boxWidth + gap);
  drawInfoBox(
    "TARIF",
    formation.price,
    margin + (boxWidth + gap) * 2
  );

  y += boxHeight + 20;

  /* ================= PROGRAM ================= */
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(...dark);
  doc.text("Programme détaillé", margin, y);
  y += 10;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);

  formation.points.forEach((point) => {
    if (y > pageHeight - 30) {
      doc.addPage();
      y = margin;
    }

    doc.setTextColor(...green);
    doc.setFont("helvetica", "bold");
    doc.text("✓", margin, y);

    doc.setFont("helvetica", "normal");
    doc.setTextColor(...dark);
    const lines = doc.splitTextToSize(
      point,
      pageWidth - margin * 2 - 10
    );
    doc.text(lines, margin + 10, y);
    y += lines.length * 7 + 3;
  });

  /* ================= FOOTER ================= */
  doc.setFontSize(9);
  doc.setFont("helvetica", "italic");
  doc.setTextColor(120, 120, 120);
  doc.text(
    "Pour plus d'informations, contactez-nous via WhatsApp.",
    margin,
    pageHeight - 15
  );

  /* ================= SAVE ================= */
  doc.save(
    `Programme_${formation.title.replace(/\s+/g, "_")}.pdf`
  );
};
