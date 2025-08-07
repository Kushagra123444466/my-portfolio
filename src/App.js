import React, { useState } from 'react';
import './App.css';
import profile from './profile.jpg';
import proj1 from './proj1.jpg';
import proj2 from './proj2.jpg';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.className = darkMode ? '' : 'dark';
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const projects = [
    {
      id: 1,
      title: "Project One",
      img: proj1,
      description: "React Based Project.",
      tech: ["React", "CSS", "API"],
      link: "#",
    },
    {
      id: 2,
      title: "Project Two",
      img: proj2,
      description: "React Based Project.",
      tech: ["React", "Framer Motion", "Styled Components"],
      link: "#",
    },
  ];

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <header className="navbar">
        <div className="logo">MyPortfolio</div>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="/resume.pdf" download className="resume-btn">Download Resume</a>
          <button onClick={toggleDarkMode} className="dark-toggle">
            {darkMode ? "Light" : "Dark"}
          </button>
        </nav>
        <div className={`burger ${menuOpen ? 'toggle' : ''}`} onClick={toggleMenu}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </header>

      <section id="home" className="hero">
        <img src={profile} alt="Profile" className="profile-pic" />
        <h1>Welcome, I'm [Kushagra Sharma]</h1>
        <p>Building sleek, professional React portfolios</p>
      </section>

      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          Passionate frontend developer focused on building fast, modern, and accessible web applications with React.
          Experienced in UI/UX design, animations, and responsive layouts.
        </p>
      </section>

      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map(({ id, title, img, description, tech, link }) => (
            <a key={id} href={link} target="_blank" rel="noopener noreferrer" className="project-card">
              <img src={img} alt={title} />
              <div className="project-info">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="tech-tags">
                  {tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <form
          action="https://formspree.io/f/mvgqvgzn"
          method="POST"
          className="contact-form"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="_replyto" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      <footer className="footer">
        <p>© 2025 Kushagra Sharma. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/kushagra-sharma-3a580b246/" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </footer>
    </div>
  );
}
