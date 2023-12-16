import { Alert, Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

//firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Config/config';


export default function LoginScreen({ navigation }: any) {

  const [correo, setcorreo] = useState('')

  const [contrasena, setcontrasena] = useState('')
  function login() {

    signInWithEmailAndPassword(auth, correo, contrasena)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        //console.log('user')
        console.log('acceso correcto')
        setcorreo('');
        setcontrasena('')
        navigation.navigate('WelcomeScreen')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('errorCode', errorCode);
        console.log('errorMessage', errorMessage);
        //Alert.alert('error','credenciales incorectas')
        /*
            if ( errorCode === 'auth/invalid-credential'){
              Alert.alert('ERROR', 'El correo o contraseña no son válidos')
            }else if(errorCode === 'auth/missing-password') {
              Alert.alert( 'ERROR', 'No se admiten contraseñas en blanco')
            }else{
              Alert.alert('ERROR', 'Verifique las credenciales')
            }
        */
        switch (errorCode) {
          case 'auth/invalid-credential':
            Alert.alert('ERROR', 'El correo o contraseña no son válidos');
            break;
          case 'auth/missing-password':
            Alert.alert('ERROR', 'No se admiten contraseñas en blanco');
            break;
          default:
            // Manejar errores basados en el mensaje de error
            switch (errorMessage) {
              case 'The email address is already in use by another account.':
                Alert.alert('ERROR', 'La dirección de correo electrónico ya está en uso por otra cuenta.');
                break;
              // Agregar más casos según sea necesario
              default:
                Alert.alert('ERROR', 'Verifique las credenciales');
                break;
            }
            break;
        }


      });
  }



  return (

<ImageBackground
 source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnfGY6U6Fc_z5bjNjUT0TMEFg0_8DYZH0xNw&usqp=CAU' }} 
 style={styles.backgroundImage}

>
<View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Login</Text>

      <TextInput
       style={styles.input}
        placeholder='ingrese el corrreo'
        placeholderTextColor='white' 
        onChangeText={(texto) => (setcorreo(texto))}
        value={correo}



      />
      <TextInput
       style={styles.input}
        placeholder='ingrese contraseña'
        placeholderTextColor='white' 
        onChangeText={(texto) => (setcontrasena(texto))}
        secureTextEntry={true}
        value={contrasena}
      />

      <Button title='Login'  color='#c0c082' onPress={() => login()}   />

      <Text onPress={() => navigation.navigate('Registro')}> Registro</Text>
    </View>

</ImageBackground>

   
  )
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
    backgroundColor: 'rgba(0, 0, 0, 1)', 
  }
})