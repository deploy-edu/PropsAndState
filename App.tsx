import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Counter from "./Counter";
import Timer from "./Timer";

export default function App() {
  const [count, setCount] = useState(0);

  const handlePress = () => {
    setCount(count + 1);
  };

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: 100,
        },
      ]}
    >
      <Timer HHmmss="00:00:00" />
      <Counter count={count} handlePress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
  },
});
