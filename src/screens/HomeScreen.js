import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>
        Home test
      </Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go To components demo"
      />
      <Button
        onPress={() => navigation.navigate("List")}
        title="Go to List Demo"
      />
      <Button
        onPress={() => navigation.navigate("Image")}
        title="Go to Image Demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
