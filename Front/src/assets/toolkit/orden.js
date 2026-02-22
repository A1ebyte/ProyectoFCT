import Filtro from '../toolkit/filtrar';

const SortOrder = { ASC: "asc", DESC: "desc" };

const ordenar = (datos, valor, order=SortOrder.DESC, limite=null) => {
    let juegos= datos.sort((a, b) => {
    if (valor === "fecha") {
      return order === SortOrder.DESC
        ? new Date(b[valor]) - new Date(a[valor])
        : new Date(a[valor]) - new Date(b[valor]);
    }
    if (valor === "rating") {
      return order === SortOrder.DESC
        ? b[valor] - a[valor]
        : a[valor] - b[valor];
    }
    if (valor === "nombre") {
      return order === SortOrder.DESC
        ? b[valor].localeCompare(a[valor])
        : a[valor].localeCompare(b[valor]);
    }
    if(valor==="recomendacion"){
      if(a[valor]!=b[valor]){
        return order === SortOrder.DESC
          ? Filtro.SortRecomendacion[b[valor]]-Filtro.SortRecomendacion[a[valor]]
          : Filtro.SortRecomendacion[a[valor]]-Filtro.SortRecomendacion[b[valor]]
      }
      return b["rating"] - a["rating"]||new Date(b["fecha"]) - new Date(a["fecha"]);
    }
    return 0;
  });
  if(limite!=null)
    {
        juegos=juegos.slice(0,limite)
    }
    return juegos
};

export default { SortOrder, ordenar };