import React, { useState } from "react";
import ServicioPlataformas from "../../../servicios/Axios/ServicioPlataformas.js";
import { enviarNoti, typeToast } from "../../../toolkit/notificacionToast.js";
import "../../../estilos/OperacionesCrud.css";

function PlataformaCrear({ plataformas = [], setPlataformas, onClose }) {
  const [plataforma, setPlataforma] = useState("");
  const [error, setError] = useState("");

  const validar = () => {
    if (!plataforma.trim()) {
      setError("El nombre es obligatorio");
      return false;
    }
    if (plataformas.some((p) => p.nombre.toLowerCase() === plataforma.toLowerCase())) {
      setError("Esa plataforma ya existe");
      return false;
    }
    setError("");
    return true;
  };

  const enviarFormulario = (e) => {
    e.preventDefault();
    if (!validar()) {
      enviarNoti(typeToast.ERROR, "Formulario inválido ❌");
      return;
    }

    const nuevaPlataforma = { nombre: plataforma.trim() };

    ServicioPlataformas.crearEntrada(nuevaPlataforma)
      .then((res) => {
        enviarNoti(typeToast.SUCCESS, "Plataforma creada correctamente ✅");
        setPlataformas([...plataformas, { ...nuevaPlataforma, id: res.data.id }]);
        setPlataforma("");
        onClose();
      })
      .catch(() => {
        enviarNoti(typeToast.ERROR, "Error al crear la plataforma ❌");
      });
  };

  return (
    <form onSubmit={enviarFormulario} className="CRUDContenedor">
      {error && <p className="error">{error}</p>}

      <label>Nombre</label>
      <input
        type="text"
        value={plataforma}
        onChange={(e) => setPlataforma(e.target.value)}
        placeholder="Ej: PlayStation, Xbox, PC..."
      />

      <button type="submit" className="boton-secundario">
        Crear plataforma
      </button>
    </form>
  );
}

export default PlataformaCrear;
