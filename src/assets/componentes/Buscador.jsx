import "../estilos/Buscador.css";

const Buscador = ({ filtro, setFiltro, data, listId, max=8}) => {
  // comprobar si ya hay coincidencia exacta
  const coincidenciaExacta = data.some(
    (v) => v.nombre.toLowerCase() === filtro.toLowerCase()
  );

  // si ya está seleccionado → no mostrar sugerencias
  const resultados = coincidenciaExacta? []: data.filter(
    (v) =>v.nombre.toLowerCase().includes(filtro.toLowerCase())).slice(-max).reverse();
  
  const limpiar = () => setFiltro("");

  return (
    <div className="buscador">
      <input
        id="buscador"
        type="text"
        autoComplete="off"
        list={listId}
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        placeholder="Buscar..."
      />

        <button type="button" className="limpiar-btn" onClick={limpiar}>
          ✕
        </button>

      <datalist id={listId}>
        {resultados.map((v) => (
          <option key={v.id} value={v.nombre} />
        ))}
      </datalist>
    </div>
  );
};

export default Buscador;
