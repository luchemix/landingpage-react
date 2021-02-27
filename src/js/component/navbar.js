import React from "react";

//create your first component
export function NavBar() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-dark">
				<div className="container-fluid">
					<div className="col-3">
						<a className="navbar-brand text-light" href="#">
							<img src="4geeks.ico"></img>
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
					</div>
					<div className="col-5"></div>
					<div className="col-3">
						<div
							className="collapse navbar-collapse"
							id="navbarSupportedContent">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<a
										className="nav-link active text-light"
										aria-current="page"
										href="#">
										Home
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link text-light" href="#">
										About
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link text-light" href="#">
										Services
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link text-light" href="#">
										Contact
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}
