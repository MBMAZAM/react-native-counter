import { View, Text, SafeAreaView, StyleSheet } from "react-native"


interface Props {
  name?: string 
}



export const HelloWorldScreen = ( { name = 'Mauricio Maza Huamani'  }: Props ) => {
  return (
  
      <View style={ styles.container }>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>Hello, {name}</Text>
      </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    color: 'blue',
    padding: 10
  }
})
