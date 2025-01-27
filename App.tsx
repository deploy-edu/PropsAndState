import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Counter from "./Counter";
import Result from "./Result";
import Timer from "./Timer";

export default function App() {
  const [count, setCount] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [HHmmss, setHHmmss] = useState("00:00:00");
  const [isFailed, setIsFailed] = useState(false);
  const [isPassed, setIsPassed] = useState(false);

  const handlePress = () => {
    if (count === 0) {
      setIsStarted(true);
      setIsFailed(false);
      setIsPassed(false);
    }

    setCount(count + 1);
  };

  const handleLongPress = () => {
    setCount(0);
  };

  const updateTime = () => {
    setHHmmss((state) => {
      const tmp = parseInt(state.replace(/:/g, ""), 10);
      const HH = Math.floor(tmp / 10000);
      const mm = Math.floor((tmp % 10000) / 100);
      const ss = tmp % 100;
      const next = (HH * 3600 + mm * 60 + ss + 1) % 86400;
      const nextHH = String(Math.floor(next / 3600)).padStart(2, "0");
      const nextmm = String(Math.floor((next % 3600) / 60)).padStart(2, "0");
      const nextss = String(next % 60).padStart(2, "0");
      return `${nextHH}:${nextmm}:${nextss}`;
    });
  };

  // 컴포넌트가 마운트 될 때 실행
  useEffect(() => {
    if (isStarted === false) {
      setHHmmss("00:00:00");
      return;
    }

    updateTime();

    const interval = setInterval(updateTime, 1000);

    // 컴포넌트가 언마운트 될 때 실행
    return () => {
      clearInterval(interval);
    };
  }, [isStarted]);

  useEffect(() => {
    if (isStarted === false) {
      return;
    }

    // 25초안에 200번 클릭하면 타이머가 멈추도록 설정
    if (parseInt(HHmmss.replace(/:/g, ""), 10) > 24) {
      if (count < 200) {
        setIsStarted(false);
        setIsFailed(true);
      } else {
        setIsPassed(true);
        setIsStarted(false);
      }
    }
  }, [count, HHmmss, isStarted]);

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: 100,
          paddingBottom: 100,
        },
      ]}
    >
      <Timer HHmmss={HHmmss} />
      <Counter
        count={count}
        handlePress={handlePress}
        handleLongPress={handleLongPress}
      />
      <Result isFailed={isFailed} isPassed={isPassed} count={count} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
  },
});
