import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Image, FlatList, Pressable, TextInput, Button, Modal, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { estilos } from './Estilos';

const Productos = () => {
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);
    const [nuevoProducto, setNuevoProducto] = useState({ nombre: '', categoria: '', precio: '' });
    const [productoEditado, setProductoEditado] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const nav = useNavigation();

    useEffect(() => {
        obtenerProductos();
    }, []);

    const obtenerProductos = async () => {
        try {
            const response = await fetch('https://servidortropicalworld-1.onrender.com/productos');
            if (!response.ok) {
                throw new Error('Error al obtener los productos');
            }
            const data = await response.json();
            setData(data);
            setLoad(true);
        } catch (error) {
            console.error(error);
            setLoad(true);
        }
    };

    const agregarProducto = async () => {
        try {
            const response = await fetch('https://servidortropicalworld-1.onrender.com/productos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(nuevoProducto),
            });
            if (!response.ok) {
                throw new Error('Error al agregar el producto');
            }
            setNuevoProducto({ nombre: '', categoria: '', precio: '' });
            obtenerProductos();
        } catch (error) {
            console.error(error);
        }
    };

    //No funciona
    const editarProducto = async () => {
        try {
            const response = await fetch(`https://servidortropicalworld-1.onrender.com/productos/${productoEditado._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productoEditado),
            });
            if (!response.ok) {
                throw new Error('Error al editar el producto');
            }
            setModalVisible(false);
            obtenerProductos();
        } catch (error) {
            console.error(error);
        }
    };

    //No funciona
    const eliminarProducto = async (id) => {
        try {
            const response = await fetch(`https://servidortropicalworld-1.onrender.com/productos/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Error al eliminar el producto');
            }
            obtenerProductos();
        } catch (error) {
            console.error(error);
        }
    };

    const abrirModal = (producto) => {
        (producto);
        setModalVisible(true);
    };

    const cerrarModal = () => {
        setModalVisible(false);
        setProductoEditado(null);
    };

    const Uscreen = () => {
        return (
            <View>
                <ActivityIndicator color={'darkblue'} />
                <Text>Cargando Datos...</Text>
            </View>
        );
    };

    const Card = ({ nombre, categoria, precio, _id }) => {
        return (
            <Pressable onPress={() => abrirModal({ nombre, categoria, precio, _id })}>
                <Text>Producto: {nombre}</Text>
                <Text>Categoría: {categoria}</Text>
                <Text>Precio: ${precio} MXN</Text>
            </Pressable>
        );
    };

    const LScreen = () => {
        return (
            <View>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <Card nombre={item.nombre} categoria={item.categoria} precio={item.precio} _id={item._id} />
                    )}
                    keyExtractor={(item) => item._id}
                />

            </View>
        );
    };

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={cerrarModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TextInput
                            style={styles.input}
                            placeholder="Nombre"
                            value={productoEditado?.nombre}
                            onChangeText={(text) => setProductoEditado({ ...productoEditado, nombre: text })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Categoría"
                            value={productoEditado?.categoria}
                            onChangeText={(text) => setProductoEditado({ ...productoEditado, categoria: text })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Precio"
                            value={productoEditado?.precio}
                            onChangeText={(text) => setProductoEditado({ ...productoEditado, precio: text })}
                        />
                        <Button title="Guardar" onPress={editarProducto} />
                        <Button title="Eliminar" onPress={() => eliminarProducto(productoEditado._id)} />
                        <Button title="Cancelar" onPress={cerrarModal} />

                    </View>
                </View>
            </Modal>

            <TextInput
                style={styles.input}
                placeholder="Nombre"
                value={nuevoProducto.nombre}
                onChangeText={(text) => setNuevoProducto({ ...nuevoProducto, nombre: text })}
            />
            <TextInput
                style={styles.input}
                placeholder="Categoría"
                value={nuevoProducto.categoria}
                onChangeText={(text) => setNuevoProducto({ ...nuevoProducto, categoria: text })}
            />
            <TextInput
                style={styles.input}
                placeholder="Precio"
                value={nuevoProducto.precio}
                onChangeText={(text) => setNuevoProducto({ ...nuevoProducto, precio: text })}
            />

            <Button title="Agregar Producto" onPress={agregarProducto} />
            <Text>Da click para editar o eliminar el producto</Text>

            {load ? <LScreen /> : <Uscreen />}

        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },
});

export default Productos;
