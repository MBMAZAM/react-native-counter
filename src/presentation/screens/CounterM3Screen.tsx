import {useState} from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../theme/global.style';

import Icon from 'react-native-vector-icons/Ionicons'


import {FAB} from 'react-native-paper';

export const CounterM3Screen = () => {
  const [count, setCount] = useState(5);

  return (
    <View style={globalStyles.containerGlobal}>
      <Text style={globalStyles.title}>{count}</Text>

      <Icon name='barbell-outline' size={55}/>
     



      <FAB
        label='Aumentar'
        uppercase
        icon="add-outline"
        style={globalStyles.fab}
        onPress={() => setCount(count + 1)}
        onLongPress={ () => setCount(0) }
      />
    </View>
  );
};
