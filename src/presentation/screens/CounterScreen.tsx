import { useState } from "react"
import {  Platform, StyleSheet, Text, View } from "react-native"
import { PrimaryButton } from "../components"
import { Button } from "react-native-paper";

export const CounterScreen = () => {

  const [count, setCount] = useState(8);

  return (


    <View style={ styles.container } >


      <Text style= {styles.title }>{count}</Text>

      <PrimaryButton
        label="Incrementar"
        onPress={() =>  setCount(count + 1) }
        onLongPress={ ()=> setCount(0) }
      />
      <Button 
       
        icon="camera" 
        mode="contained"  
        onPress={() =>  setCount(count + 1) }
        onLongPress={ ()=> setCount(0) } >
        Press me
      </Button>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 45,
    color: 'black',
    fontWeight: "900",
  },
  button: {
    backgroundColor: Platform.OS === 'android' ? 'red' : '#5856D6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 55,
    borderRadius: 10,
  },
  buttonPressed: {
    backgroundColor: '#4746AB',
  },
  
})
