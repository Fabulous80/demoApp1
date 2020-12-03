import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CounterText from './components/CounterText'

export default function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function reset() {
    setCount(0);
  }

  function renderEncouragingText() {
    if (count >= 40) {
      return "Fingers Not Tired?";
    }
    if (count >= 30) {
      return "Hang In There!";
    }
    if (count >= 20) {
      return "Press Faster!";
    }
    if (count >= 10) {
      return "Keep Going";
    }
  }

  return (
    <View style={styles.container}>

      <CounterText color="grey" marginBottom={20} fontSize={20}>{count}</CounterText>
      <CounterText color="lightblue" marginBottom={10} fontSize={40}>{count}</CounterText>
      <CounterText color="blue" marginBottom={10} fontSize={60}>{count}</CounterText>
      <CounterText color="navy"marginBottom={0} fontSize={80}>{count}</CounterText>

      <TouchableOpacity onPress={increment} style={styles.button}>
        <Text style={styles.buttonText}>Add!</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={decrement} style={styles.button}>
        <Text style={styles.buttonText}>Subtract!</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={reset} style={styles.button}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>

      <Text style={styles.encouragingText}>{renderEncouragingText()}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "red",
    fontWeight: "bold",

    fontSize: 50,
  },

  encouragingText: {
    marginTop: 50,
    color: "red",
    fontSize: 30,
   
  },

  button: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
    width: 200,
    marginTop: 10,
  },


  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
});
