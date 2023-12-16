import { Alert, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { TextInput } from 'react-native-gesture-handler';

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../Config/config';
import { ref, set } from "firebase/database";

export default function RegistroScreen({ navigation }: any) {
    const [nick, setNick] = useState('');
    const [correo, setCorreo] = useState('');
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [contrasenia, setContrasenia] = useState('');

    useEffect(() => {
        // Lógica que se ejecutará después del registro exitoso
    }, [nick, correo, nombre, edad, contrasenia]);

    const limpiarCampos = () => {
        setNick('');
        setCorreo('');
        setNombre('');
        setEdad('');
        setContrasenia('');
    };

    const guardarDatosEnFirebase = (nick: string, edad: string, correo: string) => {
        const usuarioRef = ref(db, `usuarios/${nick}`);
        set(usuarioRef, {
            nick: nick,
            email: correo,
            name: nombre,
            age: edad,
        });
    };

    const registro = () => {
        createUserWithEmailAndPassword(auth, correo, contrasenia)
            .then((userCredential) => {
                const user = userCredential.user;
                Alert.alert('Registro Correcto');
                guardarDatosEnFirebase(nick, edad, correo);
                limpiarCampos();
                navigation.navigate('Login');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                switch (errorCode) {
                    case 'auth/invalid-email':
                        Alert.alert('Error', 'El correo o la contraseña no son válidos');
                        break;
                    case 'auth/missing-password':
                        Alert.alert('Error', 'No se admite contraseña en blanco');
                        break;
                    default:
                        Alert.alert('Error', errorMessage || 'Verificar credenciales');
                        break;
                }
            });
    };

    return (
        <ImageBackground
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnfGY6U6Fc_z5bjNjUT0TMEFg0_8DYZH0xNw&usqp=CAU' }}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <Text style={styles.titleText}>Registro</Text>
                <View>
                    <TextInput
                        placeholder='Ingresar nick'
                        style={styles.input}
                        placeholderTextColor='#ffffff'  // Añadido para establecer el color del texto del placeholder
                        onChangeText={(texto) => setNick(texto)}
                    />
                    <TextInput
                        placeholder='Ingresar edad'
                        style={styles.input}
                        placeholderTextColor='#ffffff'
                        onChangeText={(texto) => setEdad(texto)}
                    />
                    <TextInput
                        placeholder='Ingresar correo'
                        style={styles.input}
                        placeholderTextColor='#ffffff'
                        onChangeText={(texto) => setCorreo(texto)}
                        keyboardType='email-address'
                    />
                    <TextInput
                        placeholder='Ingresar contraseña'
                        style={styles.input}
                        placeholderTextColor='#ffffff'
                        onChangeText={(texto) => setContrasenia(texto)}
                        secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={() => registro()}>
                    <Text style={styles.buttonText}>Registrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Inicio')}>
                    <Text style={styles.buttonText}>Volver a Inicio</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        backgroundColor: '#c7d3d8',
    },
    input: {
        height: 40,
        width: '80%',
        borderColor: '#f3f3f3',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        paddingHorizontal: 10,
        color: '#ffffff',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Ajustado para mejorar la visibilidad del texto del placeholder
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4285F4',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginTop: 10,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        marginLeft: 10,
    },
    icon: {
        color: '#ffffff',
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#ffffff',
    },
});
