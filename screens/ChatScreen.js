import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, ActivityIndicator,} from "react-native";
import { fetchGeminiResponse } from "../Gemini";

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (userMessage.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "user", text: userMessage },
      ]);
      setUserMessage("");

      setLoading(true);

      try {
        const aiResponse = await fetchGeminiResponse(userMessage);

        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "ai", text: aiResponse || "Không có phản hồi." },
        ]);
      } catch (error) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "ai", text: "Có lỗi xảy ra, vui lòng thử lại." },
        ]);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.messagesContainer} contentContainerStyle={styles.messagesContent}>
        {messages.map((msg, index) => (
          <View
            key={index}
            style={[
              styles.message,
              msg.sender === "user" ? styles.userMessage : styles.aiMessage,
            ]}
          >
            <Text style={styles.messageText}>
              {msg.sender === "user" ? "Bạn: " : "Tini: "} {msg.text}
            </Text>
          </View>
        ))}
      </ScrollView>

      {loading && (
        <ActivityIndicator
          size="large"
          color="#007bff"
          style={styles.loading}
        />
      )}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nhập tin nhắn..."
          value={userMessage}
          onChangeText={setUserMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendButtonText}>Gửi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9fb",
    padding: 16,
  },
  messagesContainer: {
    flex: 1,
  },
  messagesContent: {
    paddingVertical: 8,
  },
  message: {
    padding: 12,
    marginBottom: 10,
    borderRadius: 15,
    maxWidth: "75%",
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#007bff",
  },
  aiMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#e6e6e6",
  },
  messageText: {
    fontSize: 16,
    color: "#000",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 25,
    marginRight: 8,
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  sendButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  loading: {
    marginVertical: 10,
  },
});

export default ChatScreen;
