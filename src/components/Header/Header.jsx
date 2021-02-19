import React, { Fragment } from "react";
import { Text, Image, View } from "react-native";
import {HeaderStyles} from './style';

const Header = ({fotoUsuario, userName}) => {
  return(
      <View style={HeaderStyles.header}>
          <Image source={{uri: fotoUsuario}} 
          style={HeaderStyles.avatar}/>
          <Text>{userName}</Text>
      </View>
  );
};

export default Header;
