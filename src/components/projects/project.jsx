import React from "react";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/project.css";

const Project = ({ title, description, link, category, tech = [], status, note, featured }) => (
	<article className={featured ? "project project-featured" : "project"}>
		<div className="project-container">
			<div className="project-meta"><span>{category}</span>{status && <span>{status}</span>}</div>
			<h2>{title}</h2>
			<p>{description}</p>
			<div className="project-tech">{tech.map(t => <span key={t}>{t}</span>)}</div>
			{note && <small className="project-note">{note}</small>}
			<a className="project-link" href={link} target="_blank" rel="noreferrer">View on GitHub <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
		</div>
	</article>
);
export default Project;
