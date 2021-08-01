import React from 'react';
import {Alert, FlatList, View} from 'react-native';
import {ListItem, Avatar, Button, Icon} from 'react-native-elements';
import UsersContext from '../context/UsersContext';

export default props => {
  const {state, dispatch} = React.useContext(UsersContext);
  function confirmUserDeletion(user) {
    Alert.alert('Excluir Usuário', 'Deseja excluir usuário', [
      {
        text: 'Sim',
        onPress() {
          dispatch({
            type: 'deleteUser',
            payload: user
          })
        },
      },
      {
        text: 'Não',
      },
    ]);
  }

  function getActions(user) {
    return (
      <>
        <Button
          type="clear"
          onPress={() => props.navigation.navigate('UserForm', user)}
          icon={<Icon name="edit" size={25} color="orange" />}
        />
        <Button
          type="clear"
          onPress={() => confirmUserDeletion(user)}
          icon={<Icon name="delete" size={25} color="red" />}
        />
      </>
    );
  }
  function getUserItem({item: user}) {
    return (
      <ListItem
        key={user.id}
        onPress={() => props.navigation.navigate('UserForm')}
        bottomDivider>
        <Avatar source={{uri: user.avatarUrl}} />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
        {getActions(user)}
      </ListItem>
    );
  }

  return (
    <View>
      <FlatList
        keyExtractor={user => user.id.toString()}
        data={state.users}
        renderItem={getUserItem}
      />
    </View>
  );
};
