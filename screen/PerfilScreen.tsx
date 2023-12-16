import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { ref, onValue } from 'firebase/database';
import { auth, db } from '../Config/config';

export default function PerfilScreen() {


  onValue

  return (
    <ImageBackground
      source={{
        uri:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnfGY6U6Fc_z5bjNjUT0TMEFg0_8DYZH0xNw&usqp=CAU',
      }}
      style={styles.backgroundImage}
    >
    
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
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  label: {
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
  },
});
