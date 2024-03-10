import { StyleSheet, View } from "react-native"

export const FlexDirectionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[ styles.box, styles.box1]}/>
      <View style={[ styles.box, styles.box2]}/>
      <View style={[ styles.box, styles.box3]}/>
      <View style={[ styles.box, styles.box4]}/>
      <View style={[ styles.box, styles.box1]}/>
      <View style={[ styles.box, styles.box2]}/>
      <View style={[ styles.box, styles.box3]}/>
      <View style={[ styles.box, styles.box4]}/>
      <View style={[ styles.box, styles.box1]}/>
      <View style={[ styles.box, styles.box2]}/>
      <View style={[ styles.box, styles.box3]}/>
      <View style={[ styles.box, styles.box4]}/>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    rowGap: 52
    // backgroundColor: 'gray',
    
  },
  box: {
    width: 100,
    height: 100
  },
  box1: {
    // flex: 1,
    backgroundColor: 'green'
  },
  box2: {
    // flex: 2,
    backgroundColor: 'blue'
  },
  box3: {
    // flex: 3,
    backgroundColor: 'purple'
  },
  box4: {
    // flex: 3,
    backgroundColor: 'red'
  },
})