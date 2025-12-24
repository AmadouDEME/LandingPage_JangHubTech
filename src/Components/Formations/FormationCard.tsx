// import React from "react";

// interface Props {
//   formation: any;
//   index: number;
//   visible: boolean;
//   cardRef: (el: HTMLDivElement | null) => void;
//   onClick: () => void;
// }

// const FormationCard: React.FC<Props> = ({
//   formation,
//   index,
//   visible,
//   cardRef,
//   onClick,
// }) => {
//   return (
//     <div
//       ref={cardRef}
//       className="rounded-2xl overflow-hidden shadow-sm transition-all duration-700 cursor-pointer"
//       style={{
//         backgroundColor: "#FFFFFF",
//         border: "1px solid #E4E2DD",
//         opacity: visible ? 1 : 0,
//         transform: visible
//           ? "translateY(0) scale(1)"
//           : "translateY(50px) scale(0.9)",
//       }}
//       onClick={onClick}
//     >
//       <div className="h-52 w-full overflow-hidden">
//         <img
//           src={formation.image}
//           alt={formation.title}
//           className="w-full h-full object-cover"
//         />
//       </div>

//       <div className="p-6">
//         <h3 className="text-xl font-bold mb-4" style={{ color: "#0B0F19" }}>
//           {formation.title}
//         </h3>

//         <ul className="space-y-2 mb-6">
//           {formation.points.map((p: string, i: number) => (
//             <li key={i} className="text-sm" style={{ color: "#0B0F19" }}>
//               • {p}
//             </li>
//           ))}
//         </ul>

//         <button
//           className="w-full py-3 rounded-lg font-semibold"
//           style={{ backgroundColor: "#00C48C", color: "#FFF" }}
//         >
//           En savoir plus
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FormationCard;
