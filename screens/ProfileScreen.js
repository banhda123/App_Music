import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { usersData } from "../data1";

const ProfileScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [userImage, setUserImage] = useState(null);

  useEffect(() => {
    retrieveData();
  }, []);

  const retrieveData = async () => {
    try {
      const storedEmail = await AsyncStorage.getItem("email");
      const storedUsername = await AsyncStorage.getItem("username");

      if (storedEmail !== null && storedUsername !== null) {
        setEmail(storedEmail);
        setUsername(storedUsername);

        const user = usersData.find((u) => u.email === storedEmail);
        if (user) {
          setUserImage(user.userimage);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("email");
      await AsyncStorage.removeItem("username");
      navigation.navigate("SignIn");
    } catch (error) {
      console.log("Error during logout:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.username}>{username}</Text>
        <TouchableOpacity onPress={handleLogout}>
          <MaterialCommunityIcons name="logout" size={28} color="#FFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.profileSection}>
        <Image
          style={styles.profileImage}
          source={userImage || require("../songs/images/default.jpg")}
        />
        <Text style={styles.email}>{email}</Text>
      </View>

      <View style={styles.menuSection}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Account Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Your Plan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Support</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212", // Dark background similar to Spotify
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  username: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "700",
  },
  profileSection: {
    alignItems: "center",
    marginTop: 40,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: "#1DB954", // Spotify green
  },
  email: {
    color: "#AAA",
    fontSize: 16,
    marginTop: 10,
  },
  menuSection: {
    marginTop: 30,
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  menuText: {
    color: "#FFF",
    fontSize: 18,
  },
});

export default ProfileScreen;
