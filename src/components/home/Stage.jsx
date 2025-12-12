// import React from "react";
// import "./Stage.css";
// import crownone from "/assets/stage/crown1.svg";
// import one from "/assets/stage/profile-1.webp";
// import two from "/assets/stage/profile-2.webp";
// import three from "/assets/stage/profile-3.webp";
// import four from "/assets/stage/profile-4.webp";
// import five from "/assets/stage/profile-5.webp";
// import six from "/assets/stage/profile-6.webp";
// import seven from "/assets/stage/profile-7.webp";
// import eight from "/assets/stage/profile-8.webp";
// import nine from "/assets/stage/profile-9.webp";
// import ten from "/assets/stage/profile-10.webp";

// function Stage() {
//   return (
//     <>
//       <div className="container">
//         <div className="stagebox">
//           <div className="winner">
//             <div className="icondiv">
//               <div className="crownimg">
//                 <img src={crownone} alt="" />
//               </div>
//               <div className="idimg">
//                 <img src={one} alt="" />
//               </div>

//             </div>
//             <div
//               className="name"
//             >
//               Mem***NCU
//             </div>
//             <div className="price" style={{ color: "#bc2958" }}>₹179,028,360.00</div>
//           </div>
//           <div className="winner">
//             <div id="top" className="icondiv">

//               <div className="idimg2">
//                 <img src={two} alt="" />
//               </div>

//             </div>
//             <div
//               className="name2"
//             >
//               Mem***NYQ
//             </div>
//             <div className="price" style={{ color: "#B75C36" }}>₹51,169,804.28</div>
//           </div>
//           <div className="winner">
//             <div className="icondiv">

//               <div className="idimg3">
//                 <img src={three} alt="" />
//               </div>

//             </div>
//             <div
//               className="name3"
//             >
//               Mem***IKK
//             </div>
//             <div className="price" style={{ color: "#B58735" }}>₹39,617,872.00</div>
//           </div>
//         </div>
//         <div className="runnerup">
//           <div className="fourfive">
//             <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginLeft: "7px" }}>
//               <div className="position">4</div>
//               <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
//                 <div className="img">
//                   <img src={four} alt="" />
//                 </div>
//                 <div className="details">
//                   <span className="runner-up-name">
//                     Mem***HGF
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className="win" style={{ marginRight: "17px" }}>
//               <span>₹450,800.00</span>
//             </div>
//           </div>
//           <div className="fourfive">
//             <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginLeft: "7px" }}>
//               <div className="position">5</div>
//               <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
//                 <div className="img">
//                   <img src={five} alt="" />
//                 </div>
//                 <div className="details">
//                   <span className="runner-up-name">
//                     Mem***ASD
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className="win" style={{ marginRight: "17px" }}>
//               <span>₹230,500.00</span>
//             </div>
//           </div>
//           <div className="fourfive">
//             <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginLeft: "7px" }}>
//               <div className="position">6</div>
//               <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
//                 <div className="img">
//                   <img src={six} alt="" />
//                 </div>
//                 <div className="details">
//                   <span className="runner-up-name">
//                     Mem***CVB
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className="win" style={{ marginRight: "17px" }}>
//               <span>₹210,200.00</span>
//             </div>
//           </div>
//           <div className="fourfive">
//             <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginLeft: "7px" }}>
//               <div className="position">7</div>
//               <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
//                 <div className="img">
//                   <img src={seven} alt="" />
//                 </div>
//                 <div className="details">
//                   <span className="runner-up-name">
//                     Mem***WER
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className="win" style={{ marginRight: "17px" }}>
//               <span>₹150,850.00</span>
//             </div>
//           </div>
//           <div className="fourfive">
//             <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginLeft: "7px" }}>
//               <div className="position">8</div>
//               <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
//                 <div className="img">
//                   <img src={eight} alt="" />
//                 </div>
//                 <div className="details">
//                   <span className="runner-up-name">
//                     Mem***OIU
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className="win" style={{ marginRight: "17px" }}>
//               <span>₹140,200.00</span>
//             </div>
//           </div>
//           <div className="fourfive">
//             <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginLeft: "7px" }}>
//               <div className="position">9</div>
//               <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
//                 <div className="img">
//                   <img src={nine} alt="" />
//                 </div>
//                 <div className="details">
//                   <span className="runner-up-name">
//                     Mem***RSG
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className="win" style={{ marginRight: "17px" }}>
//               <span>₹125,800.00</span>
//             </div>
//           </div>
//           <div className="fourfive">
//             <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginLeft: "7px" }}>
//               <div className="position">10</div>
//               <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
//                 <div className="img">
//                   <img src={ten} alt="" />
//                 </div>
//                 <div className="details">
//                   <span className="runner-up-name">
//                     Mem***BKP
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className="win" style={{ marginRight: "17px" }}>
//               <span>₹100,348.00</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Stage;