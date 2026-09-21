import { useEffect } from "react";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import INFO from "../data/user";
import "./styles/modern-pages.css";

const Credentials = () => {
  useEffect(() => {
        window.scrollTo(0, 0);
}, []);
  return <div className="page-content"><NavBar active="credentials" /><main className="modern-page"><div className="page-kicker">EDUCATION • COURSES • LEARNING</div><h1>Credentials & learning</h1><p className="page-intro">My academic background, structured courses and the AI topics I’m actively building depth in.</p><section className="credential-feature"><div><span className="mini-label">EDUCATION</span><h2>{INFO.education.degree}</h2><p>{INFO.education.institution}</p></div><div className="credential-meta"><strong>{INFO.education.period}</strong><span>CGPA {INFO.education.gpa}</span></div></section><section><div className="page-kicker">COURSES & CERTIFICATIONS</div><div className="credential-grid">{INFO.certifications.map(c => <article className="credential-card" key={c.name}><span>{c.type}</span><h3>{c.name}</h3><p>{c.provider}</p></article>)}</div></section><section><div className="page-kicker">CURRENTLY LEARNING</div><div className="learning-grid">{INFO.learning.map((x, i) => <div className="learning-card" key={x}><b>0{i+1}</b><span>{x}</span></div>)}</div></section></main><Footer /></div>;
};
export default Credentials;
