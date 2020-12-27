import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  TextInput,
  Headline,
  Button,
  Paragraph,
  Dialog,
  Portal,
} from 'react-native-paper';
import axios from 'axios';
import globalStyles from '../styles/global';

const NuevoCliente = ({navigation, route}) => {
  //Inputs Formulario useState
  const {guardarConsultarApi} = route.params;

  const [nombre, guardarNombre] = useState('');
  const [telefono, guardarTelefono] = useState('');
  const [correo, guardarCorreo] = useState('');
  const [empresa, guardarEmpresa] = useState('');
  const [alerta, guardarAlerta] = useState(false);

  useEffect(() => {
    if (route.params.cliente) {
      const {nombre, telefono, correo, empresa} = route.params.cliente;

      guardarNombre(nombre);
      guardarTelefono(telefono);
      guardarEmpresa(empresa);
      guardarCorreo(correo);
    }
  }, []);

  const guardarCliente = async () => {
    if (nombre === '' || telefono === '' || correo === '' || empresa === '') {
      guardarAlerta(true);
      return;
    }

    const cliente = {nombre, telefono, empresa, correo};

    //If EDIT CLIENT
    if (route.params.cliente) {
      const {id} = route.params.cliente;
      cliente.id = id;

      const URL = `http://localhost:3000/Cliente/${id}`;

      try {
        await axios.put(URL, cliente);
      } catch (e) {
        console.log(e);
      }
    } else {
      const URL_2 = 'http://localhost:3000/Cliente';
      try {
        await axios.post(URL_2, cliente);
      } catch (e) {
        console.log(e);
      }
    }

    navigation.navigate('Inicio');

    guardarNombre('');
    guardarTelefono('');
    guardarCorreo('');
    guardarEmpresa('');
    guardarAlerta('');

    //change true new client
    guardarConsultarApi(true);
  };

  return (
    <View style={globalStyles.contenedor}>
      <Headline style={globalStyles.titulo}>Añadir Nuevo Cliente</Headline>
      <TextInput
        label="Nombre Completo"
        placeholder="Ingresa el nombre"
        onChangeText={(texto) => guardarNombre(texto)}
        value={nombre}
        style={styles.input}
      />
      <TextInput
        label="Teléfono"
        placeholder="Ingresa el número telefónico"
        onChangeText={(texto) => guardarTelefono(texto)}
        value={telefono}
        style={styles.input}
      />
      <TextInput
        label="Correo Electrónico"
        placeholder="Ingresa el correo electrónico"
        onChangeText={(texto) => guardarCorreo(texto)}
        value={correo}
        style={styles.input}
      />
      <TextInput
        label="Empresa"
        placeholder="Ingresa la empresa"
        onChangeText={(texto) => guardarEmpresa(texto)}
        value={empresa}
        style={styles.input}
      />

      <Button
        icon="pencil-circle"
        mode="contained"
        onPress={() => guardarCliente()}>
        Guardar Cliente
      </Button>

      <Portal>
        <Dialog visible={alerta} onDismiss={() => guardarAlerta(false)}>
          <Dialog.Title>Alerta</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Error todos los campos son obligatorios.</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => guardarAlerta(false)}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
});

export default NuevoCliente;
