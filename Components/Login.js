import React, { useState } from 'react';
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';

export default function Login(props){
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');

    const applogin = async() => {
        try {
            const auth = getAuth();
            const result = await signInWithEmailAndPassword(auth, email, password);
            console.log(result);
            props.navigation.navigate("ToList", {
                email:email
            });
            alert("Login Success!!")
        } catch (error) {
            console.log(error.message)
            alert("Login Failed(Re-enter your login information.)")
        }
    }

    return(
        <View style={styles.container}>
          <View style={styles.bodyContainer}>
              <Text style={styles.headerText}>To-Do-List Login!</Text> 
          </View>
            <TextInput
                style = {styles.textInput} 
                placeholder="Input E-mail"
                value={email}
                onChangeText={setemail}
            ></TextInput>
            <TextInput
                style = {styles.lastInput} 
                placeholder="Input PassWord"
                value={password}
                onChangeText={setPassword}
            ></TextInput>
            <View style = {styles.loginButton}>
                <Button
                    color='#FFBD6D'
                    title="Login"
                    onPress={applogin}
                ></Button>
            </View>
            <View style={styles.mainButton}>
              <Button
                title="Go To Main"
                color= '#FFBD6D'
                onPress={() => props.navigation.navigate("Main")}
                ></Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFEAD0',
      paddingHorizontal: 30,
      paddingVertical: 10,
      paddingButton: 20,
      flex: 1,
    },
    headerText: {
      paddingTop: 20,
      marginBottom: 10,
      fontSize: 35,
    },
    bodyContainer: {
      backgroundColor: '#FDF5DC',
      paddingHorizontal: 20,
      marginVertical: 20,
      marginBottom: 240,
      flex: 1
    },
    textInput: {
      marginTop: 20,
      marginBottom: 10,
      paddingHorizontal: 20,
      height: 40,
      borderRadius: 10,
      borderColor: 'gray',
      borderWidth: 1
    },
    lastInput: {
      marginTop: 20,
      marginBottom: 20,
      paddingHorizontal: 20,
      height: 40,
      borderRadius: 10,
      borderColor: 'gray',
      borderWidth: 1
    },
    loginButton: {
      marginTop: 50,
      marginBottom: 10,
      paddingHorizontal: 20,
      height: 40,
    },
    mainButton: {
      marginTop: 20,
      marginBottom: 50,
      paddingHorizontal: 20,
      height: 40,
    }
  });