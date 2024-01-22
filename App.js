import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Image, Text, Button, TouchableOpacity, View} from 'react-native';
import Peg1 from './Pages/Login'
import Peg2 from './Pages/Register'
import Peg3 from './Pages/Porto'
const Porto = () => {
 
  return (
    <View>
         <Peg3/>

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
      marginTop: 20,
      marginLeft: 70,
      
    },

    bio:{
      fontSize: 15 ,
      fontFamily: 'poppins',
      marginTop: 20,
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