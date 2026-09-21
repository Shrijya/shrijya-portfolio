import { faArrowRight, faBrain, faCode, faEnvelope, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import SEO from "../data/seo";
import INFO from "../data/user";
import "./styles/homepage.css";

const Homepage = () => {
	const [filter, setFilter] = useState("All");
	useEffect(() => {
        window.scrollTo(0, 0);
}, []);
	const currentSEO = SEO.find((item) => item.page === "home");
	const filters = ["All", "AI / ML", "Computer Vision", "Web / Software", "Java"];
	const projects = INFO.projects.filter(p => filter === "All" || p.category === filter);

	return (
		<>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<main className="modern-home">
					<section className="hero">
						<div className="hero-copy">
							<div className="section-label">AI / ML ENGINEER</div>
							<h1>{INFO.homepage.title}</h1>
							<p>{INFO.homepage.description}</p>
							<div className="hero-actions">
								<a className="primary-btn" href="#projects">Explore projects <FontAwesomeIcon icon={faArrowRight} /></a>
								<a className="secondary-btn" href={`mailto:${INFO.main.email}`}><FontAwesomeIcon icon={faEnvelope} /> Contact me</a>
							</div>
							<div className="hero-links">
								<a href={INFO.socials.github} target="_blank" rel="noreferrer">GitHub ↗</a>
								<a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
							</div>
						</div>
						<div className="hero-card">
							<div className="status"><span /> Available for opportunities</div>
							<div className="monogram">SP</div>
							<div className="hero-card-bottom">
								<strong>Python · ML · Computer Vision</strong>
								<span>Pune / Mumbai / Remote</span>
							</div>
						</div>
					</section>

					<section className="stats">
						<div><strong>01</strong><span>AI/LLM role</span></div>
						<div><strong>02</strong><span>ML internships</span></div>
						<div><strong>08</strong><span>projects showcased</span></div>
						<div><strong>7.69</strong><span>B.Tech GPA</span></div>
						<div><strong>2025</strong><span>graduate</span></div>
					</section>

					<section className="build-section">
						<div className="section-label">WHAT I BUILD</div>
						<div className="build-grid">
							<div><FontAwesomeIcon icon={faBrain} /><h3>AI & Machine Learning</h3><p>Classification, prediction, computer vision and practical ML applications.</p></div>
							<div><FontAwesomeIcon icon={faLayerGroup} /><h3>GenAI & NLP</h3><p>Currently expanding into NLP, LLMs, RAG and agentic AI through hands-on projects.</p></div>
							<div><FontAwesomeIcon icon={faCode} /><h3>AI Applications</h3><p>Connecting models to usable interfaces and APIs with Python, Flask and React.</p></div>
						</div>
					</section>

					<section id="projects" className="projects-section">
						<div className="section-head">
							<div><div className="section-label">SELECTED WORK</div><h2 className="section-heading">Projects by focus</h2></div>
							<Link to="/projects" className="view-all">View all <FontAwesomeIcon icon={faArrowRight} /></Link>
						</div>
						<div className="filter-row">
							{filters.map(item => <button key={item} className={filter === item ? "filter active" : "filter"} onClick={() => setFilter(item)}>{item}</button>)}
						</div>
						<div className="project-grid">
							{projects.map((p, i) => (
								<article className={p.featured ? "project-card featured" : "project-card"} key={p.title}>
									<div className="project-top"><span className="project-number">0{i + 1}</span><span className="pill">{p.category}</span></div>
									<h3>{p.title}</h3><p>{p.description}</p>
									<div className="tech-row">{p.tech.map(t => <span key={t}>{t}</span>)}</div>
									<div className="project-bottom">
										{p.status && <span className="status-text">● {p.status}</span>}
										<a href={p.link} target="_blank" rel="noreferrer">GitHub ↗</a>
									</div>
								</article>
							))}
						</div>
					</section>

					<section className="work-highlight"><div><div className="section-label">LATEST PROFESSIONAL EXPERIENCE</div><h2>Analyst – AI/LLM Practice</h2><p><strong>Innodata</strong> · AI/LLM Practice – MUSTANG · MUPSL Superintelligence Lab</p><p>Worked on LLM response evaluation, GenAI data annotation and validation, quality checks, error analysis and task-specific AI dataset workflows.</p><div className="tech-row"><span>LLM Evaluation</span><span>GenAI Data</span><span>QA</span><span>Annotation</span></div></div><Link to="/experience" className="view-all">View work →</Link></section>

					<section className="experience-preview">
						<div className="section-label">EXPERIENCE</div><h2 className="section-heading">Where I’ve worked</h2>
						{INFO.experience.map(item => <div className="experience-row" key={item.company}><span>{item.period}</span><div><h3>{item.role}</h3><strong>{item.company}</strong><p>{item.description}</p><div className="tech-row">{item.tags.map(t => <span key={t}>{t}</span>)}</div></div></div>)}
					</section>

					<section className="skills-preview">
						<div className="section-label">TOOLKIT</div><h2 className="section-heading">Technical skills</h2>
						<div className="skills-grid">{Object.entries(INFO.skills).map(([group, skills]) => <div key={group}><h3>{group}</h3><div className="skill-pills">{skills.map(s => <span className="pill" key={s}>{s}</span>)}</div></div>)}</div>
					</section>

					<section className="education-card">
						<div><div className="section-label">EDUCATION</div><h2>{INFO.education.degree}</h2><p>{INFO.education.institution}</p></div>
						<div className="education-meta"><strong>{INFO.education.period}</strong><span>GPA {INFO.education.gpa}</span></div>
					</section>

					<section className="cta">
						<div className="section-label">LET'S CONNECT</div><h2>Have an AI/ML opportunity?</h2><p>I’m open to entry-level AI, ML, GenAI and related engineering roles.</p>
						<div className="hero-actions"><a className="primary-btn" href={`mailto:${INFO.main.email}`}><FontAwesomeIcon icon={faEnvelope} /> Email me</a><a className="secondary-btn" href={INFO.socials.github} target="_blank" rel="noreferrer">GitHub ↗</a></div>
					</section>
				</main>
				<Footer />
			</div>
		</>
	);
};

export default Homepage;
