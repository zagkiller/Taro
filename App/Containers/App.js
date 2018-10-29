import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import RootContainer from './RootContainer'
/*
import { Provider } from 'react-redux'
import createStore from '../Redux'
*/

export default class App extends React.Component {
  render() {
    return (
//      <Provider store={store}>  //    </Provider>
          <RootContainer />

    );
  }
}


