import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, IconButton } from 'react-native-paper';
import { Alert, Image } from 'react-native';
import { productostyles } from './Estilos';


const Producto = ({ route }) => {
  const { id } = route.params;
  const [dato, setDato] = useState(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/' + id)
      .then((res) => res.json())
      .then((obj) => {
        setDato(obj);
        setLoad(true);
      })
      .catch((err) => Alert.alert('Ocurrió un error: ' + err));
  }, []);

  const screenL = () => {
    return (
      <ScrollView contentContainerStyle={productostyles.scrollView}>
        <Card style={productostyles.card}>
          <View style={productostyles.imageContainer}>
            <Card.Cover source={{ uri: dato.image }} style={productostyles.image} />
          </View>
          <Card.Content>
            <Title>{dato.title}</Title>
            <Paragraph>Precio: {dato.price}</Paragraph>
            <Paragraph>Descripción: {dato.description}</Paragraph>
            <Paragraph>Valoración: {dato.rating.rate}</Paragraph>
            <Paragraph>{dato.rating.count} personas compraron este producto</Paragraph>
          </Card.Content>
          <Card.Actions>
            <IconButton icon="heart" onPress={() => {}} />
          </Card.Actions>
        </Card>
      </ScrollView>
    );
  };

  const screenU = () => {
    return (
      <View>
        <Text>Cargando Datos...</Text>
        <ActivityIndicator />
      </View>
    );
  };

  return <View>{load ? screenL() : screenU()}</View>;
};



export default Producto;
