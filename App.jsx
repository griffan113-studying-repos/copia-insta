import React, { Fragment, useEffect, useState } from "react";
import { ScrollView, Dimensions, StyleSheet, FlatList, SafeAreaView, Platform } from "react-native";
import lerFotos from './src/API/feed';
import GlobalStyles from './src/UI/globalStyling';

import { Foto } from "./src/components/Foto";
import { Header } from "./src/components/Header";
import {Comentarios} from './src/components/Comentarios';

const App = () => {
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    lerFotos(setFotos);
  }, []);

  return (
    <Fragment>
      <SafeAreaView style={GlobalStyles.androidSafeArea} />
        <FlatList
          data={fotos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Fragment>
              <Header 
                userName={item.userName} 
                fotoUsuario={item.userURL} 
              />
              <Foto 
                urlFoto={item.url}
                descricao={item.description}
                qntLikes={item.likes}
                userName={item.userName}
              />
              <Comentarios comentarios={item.comentarios}/>
            </Fragment>
          )}
        />
    </Fragment>
  );
};

export default App;
