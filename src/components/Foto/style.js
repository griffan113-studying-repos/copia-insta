import {StyleSheet, Dimensions} from 'react-native'

const largura = Dimensions.get("screen").width;

export const FotoStyle = StyleSheet.create({
    imagem: {
      width: largura,
      height: largura,
    },
    likeBtn: {
      width: 30,
      height: 30,
      margin: 5
    },
    viewLike: {
      flexDirection: "row",
      alignItems: "center"
    }
  });