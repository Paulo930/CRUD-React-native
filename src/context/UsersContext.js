import React from 'react';
import users from '../data/users';

const initialState = {users};
const UsersContext = React.createContext({});

const actions = {
    createUser(state, action) {
        const user = action.payload
        user.id = Math.random()
        return {
            ...state,
            users: [...state.users, user],
        }
    },
    updateUser(state, action) {
        const user = action.payload
        return {
            ...state,
            users: state.users.map(u => u.id === user.id ? user : u)
        }
    },
    deleteUser(state, action) {
        const user = action.payload
        return {
            ...state,
            users: state.users.filter(u => u.id !== user.id)
        }
    }
}

export const UsersProvider = ({children}) => {
  function reducer(state, action) {
    const fn = actions[action.type]
    return fn ? fn(state, action) : state
  }

  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <UsersContext.Provider value={{state, dispatch}}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
