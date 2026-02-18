import ServicioPlataforma from "../../../servicios/Axios/ServicioPlataformas.js";
import Swal from "sweetalert2";
import { enviarNoti,typeToast } from '../../../toolkit/notificacionToast'
import "../../../estilos/SweetAlert.css"

const Borrar = (plataforma, plataformas, setPlataforma) => {
 
Swal.fire({
    title: "Eliminar plataforma",
    text: "Esta acción no se puede deshacer.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Eliminar",
    cancelButtonText: "Cancelar",

    customClass: {
      popup: "swal-popup",
      title: "swal-title",
      htmlContainer: "swal-text",
      confirmButton: "swal-confirm",
      cancelButton: "swal-cancel",
    },
    buttonsStyling: false,
  }).then((result) => {
    if (result.isConfirmed) {
        ServicioPlataforma.borrar(plataforma.id)
        .then(() => {
          enviarNoti(typeToast.SUCCESS,(`Eliminado Correctamente ${plataforma.nombre}`))
          const newPlataformas = plataformas.filter((a) => a.id !== plataforma.id);
          setPlataforma(newPlataformas);
        })
        .catch(() => {
          enviarNoti(typeToast.ERROR,("ERROR, No se ha borrado correctamente"))
        });           
    }
  });
};

export default Borrar;