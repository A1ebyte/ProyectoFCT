import http from "./http-axios.js";

class ServicioVideojuegos {
  getAll() {
    return http.get("/videojuegos");
  }
  getById(id) {
    return http.get(`/videojuegos/${id}`);
  }

  crearEntrada(data) {
    return http.post("/videojuegos", data);
  }

  actualizarJuego(id, data) {
    console.log(id,data)
    return http.put(`/videojuegos/${id}`, data);
  }

  borrar(id) {
    return http.delete(`/videojuegos/${id}`);
  }
}

export default new ServicioVideojuegos();