import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import UsersContext from '../context/UsersContext';

export default ({route, navigation}) => {
  const [user, setUser] = React.useState(route.params ? route.params : {});
  const { dispatch } = React.useContext(UsersContext)
  return (
    <View style={style.form}>
      <Text>Name</Text>
      <TextInput
        style={style.input}
        onChangeText={name => setUser({...user, name})}
        placeholder="Informe o Nome"
        value={user.name}
      />
      <Text>E-mail</Text>
      <TextInput
        style={style.input}
        onChangeText={email => setUser({...user, email})}
        placeholder="Informe o E-mail"
        value={user.email}
      />
      <Text>URL do Avatar</Text>
      <TextInput
        style={style.input}
        onChangeText={avatarUrl => setUser({...user, avatarUrl})}
        placeholder="Informe o URL do Avatar"
        value={user.avatarUrl}
      />
      <Button
        title="Salvar"
        onPress={() => {
            dispatch({
                type: user.id ? 'updateUser': 'createUser',
                payload: user
            })
          navigation.goBack();
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  form: {
    padding: 12,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
});
