import { PDFDownloadLink } from '@react-pdf/renderer';
import DocumentoPDF from './DocumentoPDF'; // tu componente Document

export default function DescargarPDFButton({ juegos }) {
    const exportDate = new Date().toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    });

    return (
    <PDFDownloadLink
      document={<DocumentoPDF juegos={juegos} />}
      fileName={`MiWishlist-${exportDate}.pdf`}
      className="boton-secundario"
      style={{ textDecoration: 'none', textAlign: 'center' }}
    >
    Descargar PDF
    </PDFDownloadLink>
  );
}
