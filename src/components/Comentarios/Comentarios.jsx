import React, { Fragment, useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ComentariosStyle } from "./style";

const Comentarios = ({ comentarios }) => {
  const [estComentario, setComentario] = useState(comentarios);

  const handleClick = () => {
    console.warn(conteudoCampoInput);
    campoInput.clear();
    const novoComentario = {
      date: Date.now(),
      text: conteudoCampoInput,
      userName: "Eliel",
    };
    setComentario([...estComentario, novoComentario]);
  };

  let conteudoCampoInput = "";
  let campoInput;

  return (
    <Fragment>
      <FlatList
        data={estComentario}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={ComentariosStyle.comentarios}>
            <Text style={{fontWeight: "bold"}}>{item.userName}</Text>
            <Text>: {item.text}</Text>
          </View>
        )}
      />
      <View style={ComentariosStyle.inputView}>
        <TextInput
          ref={(textInput) => (campoInput = textInput)}
          onChangeText={(text) => (conteudoCampoInput = text)}
          style={{ flex: 1 }}
          placeholder="Deixe seu comentário..."
        />
        <TouchableOpacity onPress={handleClick}>
          <Image
            style={ComentariosStyle.sendImg}
            source={require("../../../assets/img/send.png")}
          />
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

export default Comentarios;
