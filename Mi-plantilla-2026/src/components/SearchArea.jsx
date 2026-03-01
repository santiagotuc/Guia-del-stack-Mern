export default function SearchArea({
  busqueda,
  setBusqueda,
  categoriaActual,
  setCategoriaActual,
}) {
  // Agregamos Git a la lista para que coincida con tus plantillas
  const categorias = [
    { id: "all", icon: "🌐", label: "Todas" },
    { id: "react", icon: "⚛️", label: "React" },
    { id: "node", icon: "🟩", label: "Node.js" },
    { id: "express", icon: "🚂", label: "Express" },
    { id: "mongo", icon: "🍃", label: "MongoDB" },
    { id: "git", icon: "🐙", label: "Git" }, // Nueva categoría añadida
  ];

  return (
    <div className="search-area">
      <div className="search-label">¿Qué necesitas implementar?</div>
      <div className="search-box">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          className="search-input"
          placeholder="ej: useState, ruta get, conectar bd..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          autoComplete="off"
        />
      </div>

      <div className="quick-filters" style={{ padding: "0 32px" }}>
        {categorias.map((cat) => (
          <button
            key={cat.id}
            className={`qf-btn ${categoriaActual === cat.id ? "active" : ""}`}
            onClick={() => setCategoriaActual(cat.id)}
          >
            {cat.icon} {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
}
