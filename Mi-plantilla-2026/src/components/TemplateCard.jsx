import { useState } from "react";
// Importamos el resaltador y el tema oscuro de VS Code
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function TemplateCard({ template }) {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copiarCodigo = (codigo, index) => {
    navigator.clipboard.writeText(codigo).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1800);
    });
  };

  // Pequeña función para asignarle el lenguaje correcto al resaltador
  const obtenerLenguaje = (stack) => {
    if (stack === "react") return "jsx";
    if (stack === "git") return "bash";
    return "javascript"; // Para node, express, mongo
  };

  return (
    <div className={`template-card ${isOpen ? "open" : ""}`}>
      <div className="card-header" onClick={() => setIsOpen(!isOpen)}>
        <span className={`card-badge badge-${template.stack}`}>
          {template.stack.toUpperCase()}
        </span>
        <div style={{ flex: 1 }}>
          <div className="card-title">{template.title}</div>
          <div className="card-desc">{template.desc}</div>
        </div>
        <span className="card-chevron">▼</span>
      </div>

      <div className="card-body">
        <div className="card-body-inner">
          {template.steps && template.steps.length > 0 && (
            <>
              <div className="section-label">Pasos</div>
              <ul className="steps-list">
                {template.steps.map((paso, i) => (
                  <li key={i}>{paso}</li>
                ))}
              </ul>
            </>
          )}

          <div
            className="section-label"
            style={{ marginTop: template.steps ? "14px" : "0" }}
          >
            Código
          </div>

          {template.codes &&
            template.codes.map((codigo, idx) => (
              <div className="code-wrap" key={idx}>
                <div className="code-lang">
                  <span>{template.stack.toUpperCase()}</span>
                  <button
                    className={`copy-btn ${copiedIndex === idx ? "copied" : ""}`}
                    onClick={() => copiarCodigo(codigo, idx)}
                  >
                    {copiedIndex === idx ? "✓ Copiado" : "Copiar"}
                  </button>
                </div>

                {/* 🎨 Reemplazamos la etiqueta <pre> por el SyntaxHighlighter */}
                <SyntaxHighlighter
                  language={obtenerLenguaje(template.stack)}
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: "16px",
                    fontSize: "13px",
                    borderRadius: "0 0 8px 8px", // Bordes redondeados abajo
                    background: "#0d1117", // Fondo oscuro que combina con tu app
                  }}
                >
                  {codigo}
                </SyntaxHighlighter>
              </div>
            ))}

          {template.alerts &&
            template.alerts.map((alerta, idx) => (
              <div className={`alert-box alert-${alerta.type}`} key={idx}>
                <span className="alert-icon">
                  {alerta.type === "warn"
                    ? "⚠️"
                    : alerta.type === "ok"
                      ? "✅"
                      : "ℹ️"}
                </span>
                <span>{alerta.msg}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
