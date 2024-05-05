import React from "react";
import PropTypes from "prop-types";
import "./Navigation4_UYM3Z138.css";

const routes = [
	{ name: "Home", href: "#", isActive: true },
	{ name: "Services", href: "#", isActive: false },
	{ name: "Why us?", href: "#", isActive: false },
	{ name: "How It Works", href: "#", isActive: false },
];

const NavMenu = ({ routes }) => (
	<ul className="flex">
		{routes.map((route, i) => (
			<li key={i}>
				<a
					className={`px-4 ${
						route.isActive ? "opacity-100" : "opacity-50 hover:opacity-100"
					}`}
					href={route.href}
				>
					{route.name}
				</a>
			</li>
		))}
	</ul>
);

NavMenu.propTypes = {
	routes: PropTypes.array.isRequired,
};

const AuthNavMenu = () => (
	<ul className="mb-2 lg:mb-0">
		<li>
			<button className="border border-black hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black rounded-lg px-4 py-1.5">
				Signup or Login
			</button>
		</li>
	</ul>
);

const Navigation4_UYM3Z138 = () => {
	return (
		<div className="ezy__nav4_UYM3Z138 py-6 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative">
			<nav>
				<div className="container px-4">
					<div className="flex items-center justify-between">
						<a className="font-black text-3xl min-w-[33%]" href="#!">
							{" "}
							LOGO{" "}
						</a>
						<button
							className="block lg:hidden cursor-pointer h-10 z-20"
							type="button"
							id="hamburger"
						>
							<div className="h-0.5 w-7 bg-black dark:bg-white -translate-y-2"></div>
							<div className="h-0.5 w-7 bg-black dark:bg-white"></div>
							<div className="h-0.5 w-7 bg-black dark:bg-white translate-y-2"></div>
						</button>
						<div
							className="flex flex-col lg:flex-row justify-center lg:justify-between items-center text-3xl gap-6 lg:text-base lg:gap-2 absolute h-screen w-screen top-0 left-full lg:left-0 lg:relative lg:h-auto lg:w-auto bg-white dark:bg-[#0b1727] lg:bg-transparent grow"
							id="navbar"
						>
							<NavMenu routes={routes} />

							<AuthNavMenu />
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navigation4_UYM3Z138;

