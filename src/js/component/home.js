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
			<div className="container mx-5">
				<div className="card-deck">
					<Cards />
					<Cards />
					<Cards />
					<Cards />
				</div>
			</div>
			<Footer />
		</div>
	);
}
