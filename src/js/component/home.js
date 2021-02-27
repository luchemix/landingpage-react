import React from "react";

//include images into your bundle
import { NavBar } from "./navbar.js";
import { Cards } from "./cards.js";
import Footer from "./footer.js";
//create your first component
export function Home() {
	return (
		<div>
			<NavBar />
			<div className="row">
				<Cards />
				<Cards />
				<Cards />
				<Cards />
			</div>
			<Footer />
		</div>
	);
}
