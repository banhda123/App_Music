import React, { useEffect, useState } from "react";
import { 
  Text, 
  View, 
  StyleSheet, 
  TouchableOpacity, 
  ImageBackground 
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    retrieveData();
  }, []);

  const retrieveData = async () => {
    try {
      const storedEmail = await AsyncStorage.getItem("email");
      const storedUsername = await AsyncStorage.getItem("username");

      if (storedEmail) setEmail(storedEmail);
      if (storedUsername) setUsername(storedUsername);

      if (!storedEmail || !storedUsername) {
        navigation.navigate("SignIn");
      }
    } catch (error) {
      console.log("Error retrieving data:", error);
    }
  };

  const signOut = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate("SignIn");
    } catch (error) {
      console.log("Error clearing data:", error);
    }
  };

  return (
    <ImageBackground source={require('../songs/images/Home.jpg')} style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Hello, {username}!</Text>
          <Text style={styles.subHeader}>{email}</Text>
        </View>
        <TouchableOpacity onPress={signOut} style={styles.signOutButton}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  header: {
    padding: 20,
    backgroundColor: "#1a1a2e",
    borderBottomWidth: 1,
    borderBottomColor: "#2e2e4d",
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 5,
  },
  subHeader: {
    fontSize: 16,
    color: "#b5b5c3",
  },
  signOutButton: {
    marginTop: 20,
    backgroundColor: "#E63946",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  signOutText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomeScreen;
