import { FC } from "react";
import { Text, View } from "react-native";

type Props = {
  isFailed: boolean;
  isPassed: boolean;
  count: number;
};

const Result: FC<Props> = ({ isFailed, isPassed, count }) => {
  // 단일 루트 원칙에 의한 Fragment 사용
  return (
    <View
      style={{
        height: 100,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {isFailed === true && (
        <Text
          style={{
            color: "red",
            fontSize: 40,
            fontWeight: "bold",
          }}
        >
          Fail!
        </Text>
      )}
      {isPassed === true && (
        <Text
          style={{
            fontSize: 40,
            color: "green",
            fontWeight: "bold",
          }}
        >
          Pass! {count} times
        </Text>
      )}
    </View>
  );
};

export default Result;
