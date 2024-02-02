import React from 'react'
// import {Route, Routes} from "react-router-dom";
// import {Services} from "./component/services/Services";
// import {About} from "./component/about/About";
// import {Contact} from "./component/contac/Contact";
// import {Home} from "./component/Home.jsx";

export const DashboardRoutes = () => {
    return <>
        {/* <Navbar/>
        
        <Routes>
          <Route path="/" element={<Home/>}>
          <Route path="about" element={<About/>}/>
          <Route path="cardservices/:cardId" element={<Services/>}/>
          <Route path="contac" element={<Contact/>}/>

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes> */}

    </>
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
