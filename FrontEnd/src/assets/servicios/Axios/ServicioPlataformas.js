import http from "./http-axios.js";

class ServicioPlataformas {
  getAll() {
    return http.get("/Plataformas");
  }
  
  getById(id) {
    return http.get(`/Plataformas/${id}`);
  }

  crearEntrada(data) {
    return http.post("/Plataformas", data);
  }

  borrar(id) {
    return http.delete(`/Plataformas/${id}`);
  }
}

export default new ServicioPlataformas();