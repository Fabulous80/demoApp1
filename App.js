import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [count, setCount] = useState(0);

  function buttonPressed() {
    console.log("Button was pressed!");
    setCount(count + 1);
  }



  return (
    <View style={styles.container}>
      <Text>{count}</Text>

      <Button title="Press Me!" onPress={buttonPressed}></Button>

      <StatusBar style="auto" />
    </View>
  );
}


const App = () => {
  
  let [count, setCount] = useState(0)
  
  function increment(){
    setCount(count +1)
  }
  
  function decrement(){

    if (count>0){
       setCount(count -1)
    }
   
    
  }

  function reset(){
    setCount(0)
  }
  
  return (
    
    <div className="App">
    
     <h1>{count}</h1>
    
      <button onClick={increment}> Click to increment!</button>
      <button onClick={decrement}> Click to decrement!</button>
      <button onClick={reset}> Click to reset!</button>
    </div>
    
    
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
