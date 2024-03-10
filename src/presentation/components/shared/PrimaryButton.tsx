import {useState} from 'react';
import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';


interface Props {
  label: string;
  onPress?: () => void;
  onLongPress?: () => void;
}

export const PrimaryButton = ( { label, onPress, onLongPress } : Props  ) => {
  

  return (
      <Pressable
        onPress={() => { onPress && onPress()  }}
        onLongPress={() => { onLongPress && onLongPress() } }
        style={({pressed}) => [
          styles.button, 
          pressed && styles.buttonPressed
        ]}
      >
        <Text style={{color: 'white', fontSize: 25}}>{label}</Text>
      </Pressable>
  );
};

const styles = StyleSheet.create({
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
});
