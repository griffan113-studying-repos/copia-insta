import React, { Fragment, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { FotoStyle } from "./style";
import { imgLike, curtirFoto } from "../../API/curtidas";
import { Divider } from "react-native-paper";

const Foto = ({ urlFoto, descricao, qntLikes, userName }) => {
  const [curtiu, setCurtiu] = useState(false);
  const [likes, setLikes] = useState(qntLikes);

  const handleClick = () => {
    const [novoEstadoCurtiu, qnt] = curtirFoto(curtiu, likes);
    setLikes(qnt);
    setCurtiu(novoEstadoCurtiu);
  };

  return (
    <Fragment>
      <Image source={{ uri: urlFoto }} style={FotoStyle.imagem} />
      <View style={FotoStyle.viewLike}>
        <TouchableOpacity onPress={handleClick}>
          <Image style={FotoStyle.likeBtn} source={imgLike(curtiu)} />
        </TouchableOpacity>
        <Text>Curtidas: {likes}</Text>
      </View>
      <Text style={{ margin: 10 }}>
        <Text style={{ fontWeight: "bold" }}>{userName}: </Text>
        <Text >{descricao}</Text>
      </Text>
      <Divider/>
    </Fragment>
  );
};

export default Foto;
