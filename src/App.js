import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UserForm from './views/UserForm';
import UserList from './views/UserList';
import {Button, Icon} from 'react-native-elements';
import {UsersProvider} from './context/UsersContext';

const Stack = createStackNavigator();

export default props => {
  return (
    <UsersProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="UserList"
          screenOptions={screenOptions}>
          <Stack.Screen
            name="UserList"
            component={UserList}
            options={({navigation}) => {
              return {
                title: 'Lista de Usuário',
                headerRight: () => (
                  <Button
                    type="clear"
                    onPress={() => navigation.navigate('UserForm')}
                    icon={<Icon name="add" size={25} color="#fff" />}
                  />
                ),
              };
            }}
          />
          <Stack.Screen
            name="UserForm"
            component={UserForm}
            options={{title: 'Formulário de Usuários'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>
  );
};

const screenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
