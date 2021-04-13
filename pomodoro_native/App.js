import React, { useEffect, useState } from "react";
const { View, Text, StatusBar, Button } = require("react-native");

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <View>
      <Text>Hello World count: {count}</Text>
      <StatusBar style="auto" />
      <Button
        title="reset"
        onPress={() => {
          setCount(0);
        }}
      />
    </View>
  );
};

export default App;
