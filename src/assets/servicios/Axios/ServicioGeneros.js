import http from "./http-axios.js";

class ServicioGeneros {
  getAll() {
    return http.get("/Generos");
  }
  
  getById(id) {
    return http.get(`/Generos/${id}`);
  }

  crearEntrada(data) {
    return http.post("/Generos", data);
  }

  borrar(id) {
    return http.delete(`/Generos/${id}`);
  }
}

export default new ServicioGeneros();