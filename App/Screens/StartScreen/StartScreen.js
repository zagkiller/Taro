import React, { Component, PropTypes } from 'react'
import { View, Text, Button } from 'react-native'
// import { connect } from 'react-redux'

// import LoginActions from '../../Redux/LoginRedux'
// import { NavigationActions } from 'react-navigation';

 import styles from './StartScreenStyle'


class StartScreen extends Component {
  // static navigationOptions = {
  //   title: 'Авторизация'
  // }

  constructor (props) {
    super(props)

  }
  _toStart = () => {
    this.props.navigation.navigate('ChoseCardsScreen');
  }
  render () {
    return (
      <View style={styles.StartCont}>
            <Text>Войти</Text>
            <Text>Войти</Text>
            <Text>Войти</Text>
            <Button title="Start!" onPress={this._toStart} />
      </View>
    )
  }
}


export default StartScreen
