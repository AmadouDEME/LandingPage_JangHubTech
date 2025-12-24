// import React from "react";
// import { generateFormationPDF } from "./generateFormationPDF";

// interface Props {
//   formation: any;
//   onClose: () => void;
// }

// const FormationModal: React.FC<Props> = ({ formation, onClose }) => {
//   const whatsappNumber = "221770000000"; // 🔴 change ici
//   const message = encodeURIComponent(
//     `Bonjour, je souhaite m'inscrire à la formation ${formation.title}`
//   );

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center p-4"
//       style={{ backgroundColor: "rgba(11,15,25,0.8)" }}
//       onClick={onClose}
//     >
//       <div
//         className="bg-white rounded-2xl max-w-2xl w-full"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="p-8">
//           <h3 className="text-3xl font-bold mb-4">{formation.title}</h3>

//           <p className="mb-6">{formation.description}</p>

//           <div className="flex flex-col sm:flex-row gap-4">
//             {/* WhatsApp */}
//             <button
//               className="flex-1 py-3 rounded-lg font-semibold"
//               style={{ backgroundColor: "#00C48C", color: "#FFF" }}
//               onClick={() =>
//                 window.open(
//                   `https://wa.me/${whatsappNumber}?text=${message}`,
//                   "_blank"
//                 )
//               }
//             >
//               S'inscrire maintenant
//             </button>

//             {/* PDF */}
//             <button
//               className="flex-1 py-3 rounded-lg font-semibold"
//               style={{
//                 border: "2px solid #00C48C",
//                 color: "#00C48C",
//               }}
//               onClick={() => generateFormationPDF(formation)}
//             >
//               Télécharger le programme
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormationModal;
