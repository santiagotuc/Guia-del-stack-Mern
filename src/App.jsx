import { useState, useMemo } from "react"; // Agregamos useMemo
import Header from "./components/Header";
import SearchArea from "./components/SearchArea";
import TemplateCard from "./components/TemplateCard";
import { TEMPLATES } from "./data/templates";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  const [categoriaActual, setCategoriaActual] = useState("all");
  const [busqueda, setBusqueda] = useState("");

  // Memorizamos el resultado para no recalcular innecesariamente
  const resultadosFiltrados = useMemo(() => {
    return TEMPLATES.filter((plantilla) => {
      // Filtro por stack (botón)
      const coincideCategoria =
        categoriaActual === "all" || plantilla.stack === categoriaActual;

      // Filtro por texto (input)
      const textoBusqueda = busqueda.toLowerCase().trim();

      const coincideTexto =
        textoBusqueda === "" ||
        plantilla.title.toLowerCase().includes(textoBusqueda) ||
        plantilla.desc.toLowerCase().includes(textoBusqueda) ||
        (plantilla.keywords &&
          plantilla.keywords.some((k) =>
            k.toLowerCase().includes(textoBusqueda),
          ));

      return coincideCategoria && coincideTexto;
    });
  }, [busqueda, categoriaActual]); // Solo se ejecuta si cambia la búsqueda o la categoría

  return (
    <>
      <Header totalPlantillas={TEMPLATES.length} />

      <SearchArea
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        categoriaActual={categoriaActual}
        setCategoriaActual={setCategoriaActual}
      />

      <div className="results-area">
        <div className="results-meta">
          <strong>{resultadosFiltrados.length}</strong> plantilla
          {resultadosFiltrados.length !== 1 ? "s" : ""} encontrada
          {resultadosFiltrados.length !== 1 ? "s" : ""}
        </div>

        {resultadosFiltrados.length === 0 ? (
          <div className="no-results" style={{ display: "block" }}>
            <div className="nr-icon">🤔</div>
            <div className="nr-msg">Sin resultados</div>
            <div className="nr-sub">
              Prueba con otras palabras o selecciona la categoría "Todas".
            </div>
          </div>
        ) : (
          <div id="cardsContainer">
            {resultadosFiltrados.map((plantilla) => (
              <TemplateCard key={plantilla.id} template={plantilla} />
            ))}
          </div>
        )}
        {/* Contador de visitas público */}
        <div className="flex justify-center my-10">
          <img
            src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fguia-del-stack-mern.vercel.app&count_bg=%2379C83D&title_bg=%23222222&icon=&icon_color=%23E7E7E7&title=Visitas&edge_flat=false"
            alt="Contador de visitas de la Guía MERN"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
