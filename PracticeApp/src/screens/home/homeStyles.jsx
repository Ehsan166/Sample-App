import { StyleSheet } from "react-native";
const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccd5ae",
  },
  tollbar: {
    top: 40,
    height: "5%",
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#D84489",
  },
  infoCon: {
    // alignItems: "center",
    top: 50,
    padding: 10,
    width: "100%",
    height: "20%",
  },
  text1: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#D84489",
  },
});
export { homeStyles };
