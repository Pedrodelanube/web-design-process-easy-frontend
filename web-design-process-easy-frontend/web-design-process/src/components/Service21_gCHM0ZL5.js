import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCannabis } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import "./Service21_gCHM0ZL5.css";

const serviceList = [
	{
		color: "yellow",
		icon: faCannabis,
		link: "#!",
		title: "Business",
	},
	{
		color: "green",
		icon: faCannabis,
		link: "#!",
		title: "Design Development",
	},
	{
		color: "blue",
		icon: faCannabis,
		link: "#!",
		title: "Marketing",
	},
	{
		color: "orange",
		icon: faCannabis,
		link: "#!",
		title: "Photography",
	},
	{
		color: "violet",
		icon: faCannabis,
		link: "#!",
		title: "3d Animation",
	},
];

const ServiceItem = ({ service }) => (
	<div className="bg-white dark:bg-slate-800 shadow h-full rounded-xl flex items-center p-6 xl:px-6">
		<div
			className={`text-2xl w-12 h-12 rounded-2xl flex justify-center items-center mr-3 bg-${service.color}-600 bg-opacity-10 text-${service.color}-600`}
		>
			<FontAwesomeIcon icon={service.icon} />
		</div>
		<a href={service.link} className="text-lg font-bold">
			{service.title}
		</a>
	</div>
);

ServiceItem.propTypes = {
	service: PropTypes.object.isRequired,
};

const Service21_gCHM0ZL5 = () => {
	return (
		<section className="ezy__service21_gCHM0ZL5 py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-4">
				<div className="grid grid-cols-12">
					<div className="col-span-12">
						<h3 className="text-3xl md:text-5xl leading-none font-bold">
							Popular Topics
						</h3>
					</div>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 mt-12 gap-6">
					{serviceList.map((service, i) => (
						<div className="col-span-1" key={i}>
							<ServiceItem service={service} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Service21_gCHM0ZL5;

