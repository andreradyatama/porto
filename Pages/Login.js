import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Image, Text, Button, TouchableOpacity} from 'react-native';

const Login = () => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  

  return (
    <SafeAreaView style={styles.wrap}>

   

    <Text style={styles.login}>Welcome Back!</Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Password"
        keyboardType="numeric"
      />
       <TouchableOpacity style={styles.lost}>
      <Text>Lost your password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
      <Text>Sign In</Text>
      </TouchableOpacity>


    </SafeAreaView>



  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginLeft: 12,
    marginRight: 12,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  },

  login: {
    marginLeft: 120,
    marginTop: 50,
    marginBottom: 50,
    
  },

  button: {
   marginTop: 70,
   borderRadius: 10,
   backgroundColor: '#f194ff',
   width: 200,
   height: 30,
   textAlign: 'center',
   paddingTop: 5,
   marginLeft: 70,
   marginBottom:250
  },

  wrap: {
    width: 320,
    height: 1200,
    backgroundColor: 'lightgrey'
  },

  lost: {
    marginTop: 5,
    marginLeft: 180
  },



 
});

export default Login;