//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/Home.jsx";

//render your react application
ReactDOM.render(<Home />,document.querySelector("#app"));
// ReactDOM.createRoot(document.querySelector("#app")).render(
//     <React.StrictMode>
//       <BrowserRouter>
//         <Home />
//       </BrowserRouter>
//     </React.StrictMode>
//   );
