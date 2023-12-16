import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function InicioScreen({ navigation }: any) {
  const login = () => {
    navigation.navigate('Login');
  };

  const registro = () => {
    navigation.navigate('Registro');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>CRISTHIAN REYES</Text>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx-ElkGAxVdAQG8p7gBgQesikauSjEy_83Tg&usqp=CAU' }}
          style={styles.backgroundImage}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Login"
          onPress={login}
         
          color="#841584" 
        />
        <Button
          title="Registro"
          onPress={registro}
                    color="#4285F4" 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  imageContainer: {
    width: '80%',
    aspectRatio: 1,
    overflow: 'hidden',
    borderRadius: 10,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
    backgroundColor: 'rgba(187, 145, 38, 0.5)',
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  button: {
    width: '40%', // Ancho del botón
  },
});
