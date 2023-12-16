import { ImageBackground, StyleSheet, View, Image, Button, Text } from 'react-native';
import React from 'react';

//firebase 
import { signOut } from "firebase/auth";
import { auth } from '../Config/config';

export default function WelcomeScreen({ navigation }: any) {
  function cerrar() {
    signOut(auth).then(() => {
      console.log('acceso correcto');
      navigation.navigate('Login');
    }).catch((error) => {
      console.log('Error al cerrar sesión', error);
    });
  }

  return (
    <ImageBackground
      source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnfGY6U6Fc_z5bjNjUT0TMEFg0_8DYZH0xNw&usqp=CAU' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Welcome</Text>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx-ElkGAxVdAQG8p7gBgQesikauSjEy_83Tg&usqp=CAU' }}
            style={styles.image}
          />
          <Button title='Salir' color='#c0c082' onPress={() => cerrar()} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: '#c7d3d8',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff', 
    marginBottom: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
   
    width: 200,
    height: 200,
    borderRadius: 100, 
    marginBottom: 20,
  },
});
