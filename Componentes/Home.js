import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appName}>Tu Aplicación</Text>
      </View>

      <View style={styles.navigation}>
        <TouchableOpacity style={styles.navButton}>
          <Text>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text>Explorar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text>Favoritos</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.search}>
        <Text>Barra de búsqueda</Text>
      </View>

      <View style={styles.featured}>
        <Text>Contenido destacado</Text>
      </View>

      <TouchableOpacity style={styles.ctaButton}>
        <Text style={styles.ctaText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      <View style={styles.images}>
        <Text>Carrusel de imágenes</Text>
      </View>

      <View style={styles.welcome}>
        <Text>Bienvenido a Tu Aplicación</Text>
      </View>

      <View style={styles.notifications}>
        <Text>Notificaciones importantes</Text>
      </View>

      <View style={styles.quickAccess}>
        <Text>Accesos rápidos</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  navButton: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  search: {
    marginBottom: 20,
  },
  featured: {
    marginBottom: 20,
  },
  ctaButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  ctaText: {
    color: 'white',
    fontSize: 16,
  },
  images: {
    marginBottom: 20,
  },
  welcome: {
    marginBottom: 20,
  },
  notifications: {
    marginBottom: 20,
  },
  quickAccess: {
    marginBottom: 20,
  },
});

export default HomeScreen;
