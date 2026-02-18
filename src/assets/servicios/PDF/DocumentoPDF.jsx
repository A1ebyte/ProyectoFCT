import { Page, Text, Document, StyleSheet } from '@react-pdf/renderer';
import GameTarjetaPDF from "./GameTarjetaPDF";
import PDFHeader from "./HeaderPDF";

const styles = StyleSheet.create({
  page: {
    padding: 24,
    backgroundColor: "#0f0f0f",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 8,
  },

  summary: {
    fontSize: 10,
    color: "#aaaaaa",
    marginBottom: 14,
  },

  noGames: {
    color: "#ffffff",
    marginTop: 10,
  },
});

export default function GenerarPDF({ juegos }) {
  const exportDate = new Date().toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const totalJuegos = juegos.length;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <PDFHeader />
        <Text style={styles.title}>Mi Wishlist</Text>

        <Text style={styles.summary}>
          Total juegos: {totalJuegos}{"\n"}
          Exportado el: {exportDate}
        </Text>

        {totalJuegos > 0
          ? juegos.map((game) => <GameTarjetaPDF key={game.id} game={game} />)
          : <Text style={styles.noGames}>No hay juegos en la wishlist.</Text>
        }
      </Page>
    </Document>
  );
}
