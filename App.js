import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackView } from '@react-navigation/stack';

import Signup from './Components/Signup';
import Main from './Components/Main';
import Login from './Components/Login';
import ToList from './Components/ToList';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Main" component={Main}></Stack.Screen>
        <Stack.Screen name = "Signup" component={Signup}></Stack.Screen>
        <Stack.Screen name = "Login" component={Login}></Stack.Screen>
        <Stack.Screen name = "ToList" component={ToList}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
