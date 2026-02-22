import { toast } from "react-toastify";

export const typeToast = {
  SUCCESS: "success",
  ERROR: "error",
  INFO: "info",
  WARN: "warn",
};

export const enviarNoti = (tipo, mensaje) => {
  switch (tipo) {
    case "success":
      toast.success(mensaje);
      break;
    case "error":
      toast.error(mensaje);
      break;
    case "info":
      toast.info(mensaje);
      break;
    case "warn":
      toast.warn(mensaje);
      break;
    default:
      toast(mensaje);
  }
};