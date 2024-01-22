import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Image, Text, Button, TouchableOpacity, View} from 'react-native';

const Register = () => {
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');

  return (

<SafeAreaView>

<Text style={styles.login2}>Create Your Account</Text>

 <TextInput
        style={styles.input2}
        onChangeText={onChangeText}
        value={text}
        placeholder="Email"
      />
      <TextInput
        style={styles.input2}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="username"
      />
       <TextInput
        style={styles.input2}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Password"
        keyboardType="numeric"
      />

       {/* <TouchableOpacity style={styles.lost2}>
      <Text>Lost your password?</Text>
      </TouchableOpacity> */}

      <TouchableOpacity style={styles.button2}>
      <Text>Sign Up</Text>
      </TouchableOpacity>

</SafeAreaView>

      
      );
    };

    const styles = StyleSheet.create({

    input2: {
        height: 40,
        marginLeft: 12,
        marginRight: 12,
        marginTop: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
      },
    
      login2: {
        marginLeft: 100,
        marginTop: 50,
        marginBottom: 50,
        
      },
    
      button2: {
       marginTop: 70,
       borderRadius: 10,
       backgroundColor: '#f194ff',
       width: 200,
       height: 30,
       textAlign: 'center',
       paddingTop: 5,
       marginLeft: 70
      },
    
      lost2: {
        marginTop: 5,
        marginLeft: 180
      },
    
      gambar: {
        width: 150,
        height: 150,
        borderRadius: 80,
        marginLeft: 90,
        marginTop: 30
      }
    });


    export default Register;