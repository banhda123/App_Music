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
              {msg.sender === "user" ? "Bạn: " : "gemini: "} {msg.text}
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
    backgroundColor: "#1c1c1e",
    padding: 16,
  },
  messagesContainer: {
    flex: 1,
  },
  messagesContent: {
    paddingVertical: 8,
  },
  message: {
    padding: 14,
    marginBottom: 12,
    borderRadius: 20,
    maxWidth: "80%",
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#0a84ff",
    borderTopRightRadius: 0,
  },
  aiMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#2c2c2e",
    borderTopLeftRadius: 0,
  },
  messageText: {
    fontSize: 16,
    color: "#f2f2f7",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    backgroundColor: "#2c2c2e",
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {
    flex: 1,
    padding: 12,
    fontSize: 16,
    color: "#f2f2f7",
  },
  sendButton: {
    backgroundColor: "#30d158",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginLeft: 8,
  },
  sendButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  loading: {
    marginVertical: 10,
    alignSelf: "center",
  },
});

export default ChatScreen;
