import React, { useState, useEffect } from 'react';
import { SafeAreaView , Text, AsyncStorage, Image, StyleSheet } from 'react-native';

import logo from '../assets/logo.png';

export default function List() {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('techs').then(storagedtechs => {
      const techsArray = storagedtechs.split(',').map(techs => tecgs.trim());

      setTechs(techsArray);
    })
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image style={style.logo} source={logo}></Image>
      <Text>
        {techs}
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  logo:{
    height:32,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 10
  },
});