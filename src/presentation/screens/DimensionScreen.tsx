import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import {Dimensions} from 'react-native';


const { width, height } = Dimensions.get('window');


export const DimensionScreen = () => {


  const { width, height } = useWindowDimensions();


  return (
    <View>
      <View style={styles.container}>
        <View style={ {
          ...styles.purpleBox,
          width: width * 0.9
        } }/>
      </View>
      <Text style={styles.title}> w: { width},  h: {height}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    width: 400,
    height: 300,
    backgroundColor: 'red',

  },
  purpleBox: {
    height: '50%',
    width: '50%',
    backgroundColor: 'purple'
  },
  title: {
    fontSize: 30,
    fontWeight: '300',
    textAlign: 'center',
    color: 'black'
  }
})
