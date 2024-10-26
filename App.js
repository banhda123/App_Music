import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { useState } from 'react';

// Import các màn hình cần thiết
import WelcomeScreen from './screens/WelcomeScreen';
import SignInUser from './screens/SignInScreen';
import SignUpUser from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="SignIn" 
          component={SignInUser} 
          options={{ 
            headerStyle: styles.header, 
            headerTintColor: 'white', 
            title: 'Sign In' 
          }} 
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUpUser} 
          options={{ 
            headerStyle: styles.header, 
            headerTintColor: 'white', 
            title: 'Sign Up' 
          }} 
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1A1C31',
  },
});
