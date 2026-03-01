export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <span>
            Plantillas desarrolladas en{" "}
            <span className="tech-chip">⚛️ MERN Stack</span> por{" "}
            <strong style={{ color: "var(--text)" }}>
              Santiago Emmanuel Molina
            </strong>
          </span>
          <span style={{ opacity: ".35" }}>·</span>
          <a
            href="https://github.com/santiagotuc"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <span style={{ opacity: ".35" }}>·</span>
          <a
            href="https://www.linkedin.com/in/santiago-emmanuel-molina-229304a2"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <div className="footer-tech">
          <span>Aplicación web construida con </span>
          <span className="tech-chip">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
            />
            React 19.2
          </span>
          <span className="tech-chip">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS"
            />
            CSS Modules
          </span>
          <span className="tech-chip">⚡ Vite</span>
        </div>
      </div>
    </footer>
  );
}
