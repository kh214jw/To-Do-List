import { StyleSheet, Text, View, Button, Image } from 'react-native';

const Main = (props) => {
    return(
        <View style = {styles.container}>
            <View style = {styles.bodyContainer} >
                <Text style = {styles.headerText}>TO-Do-List</Text>
                <View style = {styles.iconView}>
                  <Image 
                  style={styles.icon}
                  source={require('../assets/mainicon.png')}/>
                </View>
            </View>
            
            <View style = {styles.loginButton}>
                <Button 
                    title="Go To Login Page" 
                    color= '#FFBD6D'
                    onPress={() => props.navigation.navigate("Login")}
                />
            </View>

            <View style = {styles.signupButton}>
                <Button 
                    title="Go To Sign Up Page" 
                    color= '#FFBD6D'
                    onPress={() => props.navigation.navigate("Signup")}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFEAD0',
      paddingHorizontal: 20,
      flex: 1,
    },
    headerText: {
      paddingTop: 20,
      marginBottom: 10,
      color: "brown",
      textAlign: 'center',
      fontSize: 35,
    },
    bodyContainer: {
      backgroundColor: '#FDF5DC',
      marginBottom: 10,
      paddingHorizontal: 10,
      marginVertical: 10,
      flex: 1,
    },
    iconView:{
      marginBottom: 30,
      marginTop: 10,
      justifyContent: "center",
      alignItems: 'center',
    },
    icon:{
      marginTop: 10,
      marginBottom: 30,
      width: "100%",
      height: 400,
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
    loginButton: {
      marginTop: 20,
      marginBottom: 10,
      paddingHorizontal: 20,
      height: 40,
    },
    signupButton: {
      marginTop: 20,
      marginBottom: 20,
      paddingHorizontal: 20,
      height: 40,
    }
  });

export default Main;