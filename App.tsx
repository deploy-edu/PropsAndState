import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Counter from "./Counter";
import Timer from "./Timer";

export default function App() {
  const [count, setCount] = useState(0);

  const handlePress = () => {
    setCount(count + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Timer HHmmss="00:00:00" />
      <Counter count={count} handlePress={handlePress} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
