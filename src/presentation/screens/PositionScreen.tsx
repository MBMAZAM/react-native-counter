import { StyleSheet, Text, View } from "react-native"


export const PositionScreen = () => {
  return (
    <View style={styles.container}> 
      <View style={styles.greenBox}/>
      <View style={styles.purpleBox}/>
      <View style={styles.orangeBox}/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'red'
  },
  purpleBox: {
    width: 100,
    height: 100,
    backgroundColor: 'purple',
    borderWidth: 10,
    borderColor: 'white',
    // position: 'relative', //Es por defecto
    position: 'absolute',
    bottom: 0,
    
  },
  orangeBox: {
      width: 100,
    height: 100,
    backgroundColor: 'orange',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    top: 0,
    right: 0
  },
  greenBox: {
    // width: 100,
    // height: 100,
    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: 'white',
    // position: 'absolute',
    // bottom: 0,
    // top: 0,
    // right: 0,
    // left: 0,
    ...StyleSheet.absoluteFillObject
  }
})