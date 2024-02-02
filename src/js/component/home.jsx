import React from "react";

//include images into your bundle
import { BodyCard } from "./home/BodyCard.jsx";
import { Footer } from "../component/home/Footer.jsx"

//create your first component
const Home = () => {
	return <>
		<BodyCard/>
		<Footer/>
	</>
};

export default Home;
