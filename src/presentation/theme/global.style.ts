import {Platform, StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  containerGlobal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  title: {
    fontSize: 45,
    fontWeight: '700',
    color: 'blue',
    paddingHorizontal: 40,
    paddingVertical: 25,
    backgroundColor: 'green',
    borderRadius: 100
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: Platform.OS === 'android' ? 15 : 0,
  },
});
