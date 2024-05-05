import React from "react";
import "./ClientLogo1_ZTOkywG4.css";

const clientLogos = [
	{
		logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-1.png",
		alt: "",
	},
	{
		logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-2.png",
		alt: "",
	},
	{
		logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-3.png",
		alt: "",
	},
	{
		logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-4.png",
		alt: "",
	},
	{
		logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-5.png",
		alt: "",
	},
	{
		logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-6.png",
		alt: "",
	},
	{
		logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-7.png",
		alt: "",
	},
	{
		logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-8.png",
		alt: "",
	},
];

const ClientLogo1_ZTOkywG4 = () => {
	return (
		<section className="ezy__clients1_ZTOkywG4 py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-4">
				<div className="flex flex-wrap justify-center items-center text-center">
					{clientLogos.map((client, i) => (
						<img
							src={client.logo}
							alt={client.alt}
							className="max-h-[50px] h-auto max-w-full px-12 my-8"
							key={i}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default ClientLogo1_ZTOkywG4;

