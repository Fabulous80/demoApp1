import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [count, setCount] = useState(0);

  function increment(){
    setCount(count +1)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>

      <Button title="Press Me!" onPress={increment}></Button>

      <StatusBar style="auto" />
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: "red",
    fontWeight: "bold",

    fontSize: 50,
  },
});
