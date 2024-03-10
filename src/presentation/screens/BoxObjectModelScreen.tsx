import { StyleSheet, Text, View } from "react-native"



export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
        {/* <Text style={styles.title}>Hello World</Text> */}
        <View style={styles.purpleBox}></View>
        <View style={styles.purpleBox}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'green',

    },
    title: {
      fontSize: 40,
      borderWidth: 20,
      paddingTop: 50
    },
    purpleBox: {
      height: 50,
      backgroundColor: 'purple',
      marginHorizontal: 30,
      marginVertical: 50
    }
})
