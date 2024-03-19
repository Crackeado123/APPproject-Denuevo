import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { contactostyles } from './Estilos';

const Dispositivos = () => {
  return (
    <ImageBackground
      source={require('./img/UnFondo.jpg')}
      style={contactostyles.backgroundImage}
    >
      <ScrollView>
       
      </ScrollView>
    </ImageBackground>

  );
};

export default Dispositivos;
