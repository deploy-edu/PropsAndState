import { FC } from "react";
import { Pressable, Text } from "react-native";

type Props = {
  count: number;
  handlePress: () => void;
};

const Counter: FC<Props> = ({ count, handlePress }) => {
  return (
    <Pressable
      onPress={handlePress}
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
