import { StyleSheet, Text, View } from "react-native"

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}/>
      <View style={styles.box2}/>
      <View style={styles.box3}/>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    padding: 10
  },
  box1: {
    flex: 1,
    backgroundColor: 'green'
  },
  box2: {
    flex: 2,
    backgroundColor: 'blue'
  },
  box3: {
    flex: 3,
    backgroundColor: 'purple'
  },
})