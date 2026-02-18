class LocalStorageServicio {
    static get(clave) {
      try {
        const item = window.localStorage.getItem(clave);
        return item ? JSON.parse(item) : null;
      } catch (error) {
        console.error("Error LEYENDO", clave, error);
        return null;
      }
    }
  
    static set(clave, valor) {
      try {
        window.localStorage.setItem(clave, JSON.stringify(valor));
      } catch (error) {
        console.error("Error GUARDANDO el valor", clave, error);
      }
    }
  
    static remove(clave) {
      try {
        window.localStorage.removeItem(clave);
      } catch (error) {
        console.error("Error BORRANDO", clave, error);
      }
    }
  
    static clear() {
      try {
        window.localStorage.clear();
      } catch (error) {
        console.error("Error LIMPIANDO localStorage", error);
      }
    }
  }
  
  export default LocalStorageServicio;
  