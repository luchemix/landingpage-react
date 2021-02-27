import React from "react";

//include images into your bundle
import { NavBar } from "./navbar.js";
import { Cards } from "./cards.js";
import Footer from "./footer.js";
import { Jumbotron } from "./jumbo.js";
//create your first component
export function Home() {
	return (
		<div>
			<NavBar />
			<div className="container-flex justify-content-center">
				<Jumbotron />
				<div className="row">
					<div className="col-sm-3">
						<Cards />
					</div>
					<div className="col-sm-3">
						<Cards />
					</div>
					<div className="col-sm-3">
						<Cards />
					</div>
					<div className="col-sm-3">
						<Cards />
					</div>
				</div>
			</div>

			<div className="fixed-bottom">
				<Footer />
			</div>
		</div>
	);
}
