import React from 'react';
import {Button} from 'react-native-paper';

const BarraSuperior = ({navigation, route}) => {
  const guardarConsultarApi = false;
  const handlePress = () => {
    navigation.navigate('NuevoCliente', {guardarConsultarApi});
  };

  return <Button icon="plus-circle" color="#fff" onPress={() => handlePress()}>Cliente</Button>;
}
export default BarraSuperior;
