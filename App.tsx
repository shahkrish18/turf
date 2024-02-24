import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './screens/Login';
import Signin from './screens/Signin';
import Welcome from './screens/Welcome';
import Popup from './screens/Popup';
import Home from './screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Welcome" options={{headerShown:false}} component={Welcome} />
        <Stack.Screen name="Login" options={{headerShown:false}} component={Login} />
        <Stack.Screen name="Signin" options={{headerShown:false}} component={Signin} />
        <Stack.Screen name="Popup" options={{headerShown:false}} component={Popup} />
        <Stack.Screen name="Home" options={{headerShown:false}} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}