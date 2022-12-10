import React, { useState } from 'react';
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';

export default function Login(props){
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');

    const applogin = async() => {
        //로그인 성공 시 출력
        try {
            //로그인 함수
            const auth = getAuth();
            const result = await signInWithEmailAndPassword(auth, email, password);
            console.log(result);
            //로그인 이메일을 "ToList"로 전달
            props.navigation.navigate("ToList", {
                email:email
            });
            alert("Login Success!!")
            //로그인 실패시 출력
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
                    //클릭 시 로그인
                    onPress={applogin}
                ></Button>
            </View>
            <View style={styles.mainButton}>
              {/* 메인 페이지로 이동 */}
              <Button
                title="Go To Main"
                color= '#FFBD6D'
                //클릭시 "Main"을 컨테이너를 props로 전달
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