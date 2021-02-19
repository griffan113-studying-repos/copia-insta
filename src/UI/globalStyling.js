import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  androidSafeArea: {
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
});
