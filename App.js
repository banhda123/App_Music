import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpUser from './screens/SignUpScreen';
import SignInUser from './screens/SignInScreen';
import HomeScreen from './screens/HomeScreen';
import MusicScreen from './screens/MusicScreen';
import WelcomeScreen from './screens/WelcomeScreen'; 

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
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
          options={{ headerStyle: styles.header, headerTintColor: 'white', title: 'Sign In' }} 
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUpUser} 
          options={{ headerStyle: styles.header, headerTintColor: 'white', title: 'Sign Up' }} 
        />
        <Stack.Screen 
          name="Home" 
          component={HomeTabNavigator} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Music" 
          component={MusicScreen} 
          options={({ navigation }) => ({
            headerStyle: styles.header,
            headerTintColor: 'white',
            headerLeft: () => (
              <Ionicons 
                name="arrow-back" 
                size={24} 
                color="white" 
                style={{ marginLeft: 10 }}
                onPress={() => navigation.goBack()} 
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarStyle: {
        backgroundColor: "#1A1C31",
        borderTopColor: "#01020B",
      },
      tabBarActiveTintColor: "#E63946",
      tabBarInactiveTintColor: "gray",
      tabBarIcon: ({ color }) => {
        let iconName;
        if (route.name === 'Menu') {
          iconName = "list-circle-outline";
        } else if (route.name === 'MusicList') {
          iconName = "menu-outline";
        } else if (route.name === 'Profile') {
          iconName = "man-outline";
        }
        return <Ionicons name={iconName} size={24} color={color} />;
      },
      tabBarLabel: ({ focused, color }) => (
        <Text style={{ color, fontSize: 12, fontWeight: focused ? 'bold' : 'normal' }}>
          {route.name}
        </Text>
      ),
    })}
  >
    <Tab.Screen name="Menu" component={HomeScreen} />
    <Tab.Screen name="MusicList" component={MusicScreen} />
    <Tab.Screen name="Profile" component={SignUpUser} />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1A1C31',
  },
});
