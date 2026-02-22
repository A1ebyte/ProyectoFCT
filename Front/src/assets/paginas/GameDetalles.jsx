import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ServicioVideojuegos from "../servicios/Axios/ServicioVideojuegos";

function Detalles() {
    const { id } = useParams(); // Obtiene el id de la URL
    const [juego, setJuego] = useState(null);

    useEffect(() => {
        ServicioVideojuegos.getById(id)
            .then(res => setJuego(res.data))
            .catch(err => console.error(err));
    }, [id]);

    if (!juego) return <p>Cargando...</p>;

    return (
        <div>
            <h1>{juego.nombre}</h1>
            <img src={juego.image} alt={juego.nombre} />
            <p>Generos: {juego.genre.join(" - ")}</p>
            <p>Puntuacion: {juego.rating}/10</p>
            <p>Descripción: {juego.description}</p>
        </div>
    );
}

export default Detalles;
