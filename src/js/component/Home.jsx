import React from "react";

//include images into your bundle
import { DashboardRoutes } from "../routers/DashBoardRouters.jsx";
import { BodyCard } from "./home/BodyCard.jsx";
import { Footer } from "./home/Footer.jsx"

//create your first component
const Home = () => {
	return <>


		<BodyCard/>
		<Footer/>
	
		
	</>
};

export default Home;
