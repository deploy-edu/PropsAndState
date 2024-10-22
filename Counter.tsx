import { FC } from "react";
import { Pressable, Text } from "react-native";

type Props = {
  count: number;
  handlePress: () => void;
  handleLongPress: () => void;
};

const Counter: FC<Props> = ({ count, handlePress, handleLongPress }) => {
  return (
    <Pressable
      onPress={handlePress}
      onLongPress={handleLongPress}
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <Text
        style={{
          fontSize: 100,
          color: "white",
        }}
      >
        {count}
      </Text>
    </Pressable>
  );
};

export default Counter;
