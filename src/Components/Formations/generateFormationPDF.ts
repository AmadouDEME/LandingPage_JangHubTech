// import jsPDF from "jspdf";

// export const generateFormationPDF = (formation: any) => {
//   const doc = new jsPDF();

//   doc.setFontSize(18);
//   doc.text(formation.title, 20, 20);

//   doc.setFontSize(12);
//   doc.text(`Durée : ${formation.duration}`, 20, 35);
//   doc.text(`Niveau : ${formation.level}`, 20, 45);
//   doc.text(`Tarif : ${formation.price}`, 20, 55);

//   doc.text("Description :", 20, 70);
//   doc.text(formation.description, 20, 80, { maxWidth: 170 });

//   doc.text("Programme :", 20, 110);

//   formation.points.forEach((point: string, index: number) => {
//     doc.text(`• ${point}`, 25, 120 + index * 10);
//   });

//   doc.save(`${formation.title}.pdf`);
// };
