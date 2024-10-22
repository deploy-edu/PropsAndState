import { FC } from "react";
import { Text, View } from "react-native";

type Props = {
  HHmmss: string;
};

const Timer: FC<Props> = ({ HHmmss }) => {
  return (
    <View
      style={{
        backgroundColor: "skyblue",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontSize: 50,
          color: "white",
        }}
      >
        {HHmmss}
      </Text>
    </View>
  );
};

export default Timer;
