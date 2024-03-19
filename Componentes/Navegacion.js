import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { Image, SafeAreaView, TouchableOpacity, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import Registro from './Registro';
import User from "./img/user.jpg";
import Home from './Home';
import Producto from './Producto';
import { Login } from './Login';
import Productos from './Productos';
import FAQItem from './PreguntasF';
import Contacto from './Contacto'
import Quienes from './QuienesSomos';
import Politicas from './Politicas';
import Bienvenida from './Bienvenida';
import Acercade from './Acercade';

const Stack = createNativeStackNavigator();
const TabsH = createBottomTabNavigator();
const StackP = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <SafeAreaView>
      <View
        style={{
          height: 200,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomColor: '#f4f4f4',
          borderBottomWidth: 3,
        }}
      >
        <Image
          source={User}
          style={{
            height: 100,
            width: 100,
            borderRadius: 65,
            marginTop: 30
          }}
        />

        <Text
          style={{
            fontSize: 22,
            marginVertical: 6,
            fontWeight: 'bold',
            color: '#111',
          }}
        >
          Isabella Joanna
        </Text>
      </View>

      <DrawerItemList {...props} />
    </SafeAreaView>
  );
};

export const NavHome = () => {
  return (
    //En esta parte es muy importante por que aqui es donde puedo cambiar el header solo le pondria los mismos estilos y listo
    <Stack.Navigator>
      <Stack.Screen name='Bienvenida' component={Bienvenida} options={{ headerShown: false }} />
      <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
      <Stack.Screen name='Registro' component={Registro} options={{ headerShown: false }} />
      <Stack.Screen name='Home' component={MiDrawer} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export const StackProductos = () => {
  return (
    <StackP.Navigator>
      <StackP.Screen name='Productos2' component={Productos} options={{ headerShown: false }} />
      <StackP.Screen name='Producto' component={Producto} options={{ headerShown: true }} />
    </StackP.Navigator>
  );
};

//Estos son los menús de abajo
export const NavTabsHome = () => {
  return (
    <TabsH.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#c6ffa0' },
      }}>
      <TabsH.Screen
        name={'Home'}
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => <FontAwesome name='home' size={30} color={'black'} />,
        }}
      />
      <TabsH.Screen
        name='Listar'
        component={StackProductos}
        options={{
          headerShown: false,
          tabBarIcon: () => <FontAwesome name='list-ul' size={30} />,
        }}
      />
      <TabsH.Screen
        name='Productos'
        component={StackProductos}
        options={{
          headerShown: false,
          tabBarIcon: () => <FontAwesome name='shopping-basket' size={30} />,
        }}
      />
    </TabsH.Navigator>
  );
};

//Estos son los menus de la izquierda
export const MiDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerContent}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#fff',
          width: 250,
        },
        headerStyle: {
          backgroundColor: '#c6ffa0',// c6ffafe0 fondo con transparencia
        },
        headerTintColor: '#004883fe',
        headerTitleStyle: {
          color: '#004883fe'
        },
        drawerLabelStyle: {
          color: '#004883fe',
        },
      }}
    >

      <Drawer.Screen
        name='Principal'
        options={{
          headerShown: true,
          drawerIcon: () => <FontAwesome name='home' color={'black'} size={30} />,
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <Image
                source={require('./img/LogoTW.jpeg')}
                style={{ width: 45, height: 45, borderRadius: 15, marginRight: 15 }}
              />
            </View>
          ),
        }}
        component={NavTabsHome}
      />

      <Drawer.Screen
        name='Configuracion'
        options={({ navigation }) => ({
          headerShown: true,
          drawerIcon: () => <FontAwesome name='cog' color={'grey'} size={30} />,
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <Image
                source={require('./img/LogoTW.jpeg')}
                style={{ width: 45, height: 45, borderRadius: 15, marginRight: 15 }}
              />
            </View>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome name='arrow-left' size={24} color={'black'} style={{ marginLeft: 10 }} />
            </TouchableOpacity>
          ),
        })}
        component={Home}
      />

      <Drawer.Screen
        name='Quienes somos'
        options={({ navigation }) => ({
          title: 'Quienes somos',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome name='arrow-left' size={24} color={'black'} style={{ marginLeft: 10 }} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <Image
                source={require('./img/LogoTW.jpeg')}
                style={{ width: 45, height: 45, borderRadius: 15, marginRight: 15 }}
              />
            </View>
          ),
          drawerIcon: () => <FontAwesome name='group' color={'#0767cd'} size={30} />,
        })}
        component={Quienes}
      />

      <Drawer.Screen
        name='Politicas'
        options={({ navigation }) => ({
          title: 'Políticas',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome name='arrow-left' size={24} color={'black'} style={{ marginLeft: 10 }} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <Image
                source={require('./img/LogoTW.jpeg')}
                style={{ width: 45, height: 45, borderRadius: 15, marginRight: 15 }}
              />
            </View>
          ),
          drawerIcon: () => <FontAwesome name='legal' color={'#583201'} size={30} />,
        })}
        component={Politicas}
      />

      <Drawer.Screen
        name='Dispositivos'
        options={({ navigation }) => ({
          title: 'Dispositivos',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome name='arrow-left' size={24} color={'black'} style={{ marginLeft: 10 }} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <Image
                source={require('./img/LogoTW.jpeg')}
                style={{ width: 45, height: 45, borderRadius: 15, marginRight: 15 }}
              />
            </View>
          ),
          drawerIcon: () => <FontAwesome name='android' color={'green'} size={30} />,
        })}
        component={NavTabsHome}
      />

      <Drawer.Screen
        name='Ayuda'
        options={({ navigation }) => ({
          title: 'Ayuda',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome name='arrow-left' size={24} color={'black'} style={{ marginLeft: 10 }} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <Image
                source={require('./img/LogoTW.jpeg')}
                style={{ width: 45, height: 45, borderRadius: 15, marginRight: 15 }}
              />
            </View>
          ),
          drawerIcon: () => <FontAwesome name='handshake-o' color={'blue'} size={30} />,
        })}
        component={NavTabsHome}
      />

      <Drawer.Screen
        name='Preguntas frecuentes'
        options={({ navigation }) => ({
          title: 'Preguntas Frecuentes',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome name='arrow-left' size={24} color={'black'} style={{ marginLeft: 10 }} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <Image
                source={require('./img/LogoTW.jpeg')}
                style={{ width: 45, height: 45, borderRadius: 15, marginRight: 15 }}
              />
            </View>
          ),
          drawerIcon: () => <FontAwesome name='question' color={'purple'} size={30} />,
        })}
        component={FAQItem}
      />

      <Drawer.Screen
        name='Contacto'
        options={({ navigation }) => ({
          title: 'Contacto',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome name='arrow-left' size={24} color={'black'} style={{ marginLeft: 10 }} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <Image
                source={require('./img/LogoTW.jpeg')}
                style={{ width: 45, height: 45, borderRadius: 15, marginRight: 15 }}
              />
            </View>
          ),
          drawerIcon: () => <FontAwesome name='phone' color={'orange'} size={30} />,
        })}
        component={Contacto}
      />

      <Drawer.Screen
        name='Acerca'
        options={({ navigation }) => ({
          title: 'Acerca de',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome name='arrow-left' size={24} color={'black'} style={{ marginLeft: 10 }} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <Image
                source={require('./img/LogoTW.jpeg')}
                style={{ width: 45, height: 45, borderRadius: 15, marginRight: 15 }}
              />
            </View>
          ),
          drawerIcon: () => <FontAwesome name='info' color={'red'} size={30} />,
        })}
        component={Acercade}
      />

      <Drawer.Screen
        name='Cerrar sesion'
        options={{
          headerShown: false,
          drawerIcon: () => <FontAwesome name='sign-in' size={30} />,
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <Image
                source={require('./img/LogoTW.jpeg')}
                style={{ width: 80, height: 40, borderRadius: 15, }}
              />
            </View>
          ),
        }}
        component={NavHome}
      />
    </Drawer.Navigator>
  );
};
