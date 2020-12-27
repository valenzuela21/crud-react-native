import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {List, Headline, Button, FAB} from 'react-native-paper';
import globalStyles from '../styles/global';
import axios from 'axios';

const Inicio = ({navigation}) => {
  //State Clients
  const [clientes, guardarClientes] = useState([]);
  const [consultarApi, guardarConsultarApi] = useState(true);

  useEffect(() => {
    const obtenerClientes = async () => {
      try {
        const resultado = await axios.get('http://localhost:3000/Cliente');
        guardarClientes(resultado.data);
        guardarConsultarApi(false);
      } catch (e) {
        console.log(e);
      }
    };

    if (consultarApi) {
      obtenerClientes();
    }
  }, [consultarApi]);

  return (
    <View style={globalStyles.contenedor}>
      <Headline style={globalStyles.titulo}>
        { clientes.length > 0 ? 'Clientes' : 'Aún no hay clientes.'}
      </Headline>
      <FlatList
        data={clientes}
        keyExtractor={(cliente) => cliente.id.toString()}
        renderItem={({item}) => (
          <List.Item
            title={item.nombre}
            description={item.empresa}
            onPress={() =>
              navigation.navigate('DetallesCliente', {
                item,
                guardarConsultarApi,
              })
            }
          />
        )}
      />
      <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() =>
          navigation.navigate('NuevoCliente', {guardarConsultarApi})
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 5,
    bottom: 40,
  },
});

export default Inicio;
