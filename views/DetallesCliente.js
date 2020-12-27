import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Headline, Text, Subheading, Button, FAB} from 'react-native-paper';
import globalStyles from '../styles/global';

import axios from 'axios';

const DetallesCliente = ({navigation, route}) => {
  const {guardarConsultarApi} = route.params;

  const {nombre, telefono, empresa, correo, id} = route.params.item;

  const mostrarConfirm = () => {
    Alert.alert(
      '¿Deseas Eliminar este cliente?',
      'Realmente deseas eliminar este cliente recuerda que no se podrá recuperar.',
      [
        {
          text: 'Eliminar',
          onPress: () => eliminarContacto(),
        },
        {
          text: 'Cancelar',
          style: 'cancel',
        },
      ],
    );
  };

  const eliminarContacto = async () => {
    const url = `http://localhost:3000/Cliente/${id}`;

    try {
      await axios.delete(url);
    } catch (error) {
      console.log(error);
    }

    navigation.navigate('Inicio');
    guardarConsultarApi(true);
  };

  return (
    <View style={globalStyles.contenedor}>
      <Headline style={globalStyles.titulo}>{nombre}</Headline>
      <Text style={styles.texto}>
        Empresa: <Subheading>{empresa}</Subheading>
      </Text>
      <Text style={styles.texto}>
        Telefono: <Subheading>{telefono}</Subheading>
      </Text>
      <Text style={styles.texto}>
        Correo: <Subheading>{correo}</Subheading>
      </Text>
      <Button
        style={styles.botom}
        mode="contained"
        icon="cancel"
        onPress={() => mostrarConfirm()}>
        Eliminar Cliente
      </Button>
      <FAB
        style={styles.fab}
        small
        icon="pencil"
        onPress={() =>
          navigation.navigate('NuevoCliente', {
            cliente: route.params.item,
            guardarConsultarApi,
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  texto: {
    marginBottom: 10,
    fontSize: 20,
  },
  botom: {
    marginTop: 20,
    backgroundColor: '#7a130d',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 5,
    bottom: 20,
  },
});

export default DetallesCliente;
