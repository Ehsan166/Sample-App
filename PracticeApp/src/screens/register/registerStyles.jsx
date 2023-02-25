import { StyleSheet } from "react-native";

const registerStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccd5ae",
  },
  input: {
    height: 50,
    borderWidth: 5,
    borderColor: "#D84489",
    padding: 15,
    borderTopLeftRadius: 17,
    borderBottomRightRadius: 17,
    margin: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    marginLeft: 10,
    width: "40%",
    borderTopLeftRadius: 17,
    borderBottomRightRadius: 17,
    elevation: 3,
    backgroundColor: "#D84489",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  text1: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#D84489",
  },
  logoCon: {
    width: "100%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    top: -300,
  },
  infoCon: {
    // alignItems: "center",
    padding: 10,
    width: "100%",
    height: "20%",
  },
  logo: {
    height: 100,
    width: 100,
    alignSelf: "center",
    position: "absolute",
    top: 180,
  },
  formCon: {
    width: "100%",
    height: "80%",
    alignSelf: "center",
    position: "absolute",
    top: "40%",
  },
});
export { registerStyles };
