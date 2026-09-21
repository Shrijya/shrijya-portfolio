import React, { useState } from "react";
import Project from "./project";
import INFO from "../../data/user";
import "./styles/allProjects.css";

const AllProjects = () => {
	const filters = ["All", "AI / ML", "Computer Vision", "Web / Software", "Java"];
	const [filter, setFilter] = useState("All");
	const projects = INFO.projects.filter(p => filter === "All" || p.category === filter);
	return (
		<>
			<div className="project-filters">
				{filters.map(f => <button key={f} className={filter === f ? "active" : ""} onClick={() => setFilter(f)}>{f}</button>)}
			</div>
			<div className="all-projects-container">
				{projects.map((project, index) => <Project key={project.title} {...project} index={index} />)}
			</div>
		</>
	);
};
export default AllProjects;
