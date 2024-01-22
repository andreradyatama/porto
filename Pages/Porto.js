import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Image, Text, Button, TouchableOpacity, View} from 'react-native';

const Porto = () => {
 
  return (
   <View style={styles.wrap}>  
   <Image 
   style={styles.ivn}
   source={require('../assets/pp.jpg')}/>

   <Text style={styles.name}>Andre Radyatama</Text>

   <Text style={styles.bio}>Saya Andre Radyatama siswa SMK Telkom Purwokerto dari jurusan Rekayasa Perangkat Lunak yang memiliki minat mempelajari hal baru</Text>

   <TouchableOpacity style={styles.button}>
      <Text>Contact Me</Text>
      </TouchableOpacity>
    </View>

  );
  };



  const styles = StyleSheet.create({

    ivn:{
      width: 150,
      height: 150,
      marginLeft: 85,
      marginTop: 30,
      borderRadius: 80
      
    },

    wrap:{
      width: 317,
      height: 500,
      backgroundColor: 'beige'
    },

    name:{
      fontSize: 25,
      fontFamily: 'poppins',
      marginTop: 50,
      marginLeft: 70,
      
    },

    bio:{
      fontSize: 15 ,
      fontFamily: 'poppins',


      marginLeft: 25,
      
    },
    
     button: {
   marginTop: 50,
   borderRadius: 10,
   backgroundColor: '#f194ff',
   width: 200,
   height: 30,
   textAlign: 'center',
   paddingTop: 5,
   marginLeft: 70
  },
  });

  export default Porto;