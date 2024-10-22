import { FC } from "react";
import { Pressable, Text } from "react-native";

type Props = {
  count: number;
  handlePress: () => void;
};

const Counter: FC<Props> = ({ count, handlePress }) => {
  return (
    <Pressable onPress={handlePress}>
      <Text>{count}</Text>
    </Pressable>
  );
};

export default Counter;
