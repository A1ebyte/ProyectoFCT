import { View, Image, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 60,               // igual que tu menú web
    backgroundColor: "#0A2B5C", // color de fondo (var(--azul-brand))
    flexDirection: "row",
    alignItems: "center",      // centrar vertical
    paddingLeft: 10,           // espacio interno izquierdo
    marginBottom: 20,          // separación del contenido
  },
  logo: {
    height: "80%",             // ocupa el 80% de la altura del header
    objectFit: "contain",
  },
});

export default function PDFHeader() {
  return (
    <View style={styles.header}>
      <Image  src={`${window.location.origin}/Imagenes/Logo.png`} style={styles.logo} />
    </View>
  );
}