import { useEffect } from "react";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import INFO from "../data/user";
import "./styles/modern-pages.css";

const Experience = () => {
  useEffect(() => {
        window.scrollTo(0, 0);
}, []);
  return <div className="page-content"><NavBar active="experience" /><main className="modern-page"><div className="page-kicker">WORK EXPERIENCE</div><h1>Where I’ve worked</h1><p className="page-intro">AI/LLM evaluation, machine learning, computer vision and technical-community experience.</p><div className="timeline">{INFO.experience.map((item, i) => <article className="timeline-card" key={item.company}><div className="timeline-index">0{i+1}</div><div className="timeline-body"><span className="timeline-period">{item.period}</span><h2>{item.role}</h2><h3>{item.company}</h3>{item.team && <p className="timeline-team">{item.team}</p>}<p>{item.description}</p><div className="tag-list">{item.tags.map(t => <span key={t}>{t}</span>)}</div></div></article>)}</div></main><Footer /></div>;
};
export default Experience;
