export default function Header({ totalPlantillas }) {
  return (
    <div className="header react-theme">
      {/* Nuevo fondo animado: Órbitas de React */}
      <div className="orbit-container">
        <div className="orbit orbit-1"></div>
        <div className="orbit orbit-2"></div>
        <div className="orbit orbit-3"></div>
      </div>

      <div className="header-inner">
        {/* CENTRO - Todo centrado y más limpio */}
        <div
          className="header-center"
          style={{ width: "100%", alignItems: "center" }}
        >
          <div className="header-icon-wrap">
            <div className="header-icon-halo"></div>
            <span
              className="header-icon"
              style={{ filter: "drop-shadow(0 0 15px #61dafb)" }}
            >
              ⚛️
            </span>
          </div>
          <div
            className="header-tag"
            style={{ color: "#61dafb", borderColor: "#61dafb" }}
          >
            MERN · FULL STACK WEB DEVELOPER
          </div>
          <div
            className="header-title"
            style={{
              background:
                "linear-gradient(100deg, #ffffff 0%, #61dafb 50%, #34d399 100%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Buscador de Plantillas
          </div>
          <div className="header-sub">
            <span className="hl">Tu biblioteca personal</span>
            <span className="sep">→</span>
            <span>código listo para usar</span>
          </div>
        </div>
      </div>

      {/* ESTADÍSTICAS */}
      <div
        className="header-stats"
        style={{
          justifyContent: "center",
          borderTopColor: "rgba(97, 218, 251, 0.2)",
        }}
      >
        <div className="stat-item">
          <div className="dot" style={{ background: "#61dafb" }}></div>
          <span>
            <span className="val">{totalPlantillas}</span> plantillas
          </span>
        </div>
        <div className="stat-item">
          <div className="dot" style={{ background: "#34d399" }}></div>
          <span>
            <span className="val">4</span> tecnologías
          </span>
        </div>
        <div className="stat-item">
          <div className="dot" style={{ background: "#f59e0b" }}></div>
          <span>
            <span className="val">Full</span> Stack
          </span>
        </div>
      </div>
    </div>
  );
}
