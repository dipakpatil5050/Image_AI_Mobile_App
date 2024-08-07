import { StatusBar } from "expo-status-bar";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const handleSubmit = () => {
    alert("First fill the data ");
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to Syspro ERP APP</Text>
      <TextInput style={styles.username} placeholder="Enter your username" />
      <TextInput style={styles.password} placeholder="Enter Your Password" />
      <View style={styles.submitBtn}>
        <Button
          onPress={handleSubmit}
          style={styles.submitBtn}
          title="Submit"
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffff",
  },

  username: {
    padding: 10,
    color: "red",
    border: 20,
    borderColor: "red",
    borderTopColor: "green",
  },

  password: {
    padding: 10,
    color: "green",
  },

  submitBtn: {
    marginTop: 30,
    borderRadius: 20,
    backgroundColor: "red",
  },
});
