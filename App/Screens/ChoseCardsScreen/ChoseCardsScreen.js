import React, { Component, PropTypes } from 'react'
import { View, Text, Button } from 'react-native'
// import { connect } from 'react-redux'

// import LoginActions from '../../Redux/LoginRedux'
// import { NavigationActions } from 'react-navigation';

 import styles from './ChoseCardsScreenStyle'


class ChoseCardsScreen extends Component {
  // static navigationOptions = {
  //   title: 'Авторизация'
  // }

  constructor (props) {
    super(props)

  }
  _toStart = () => {
    this.props.navigation.navigate('StartScreen');
  }
  render () {
    return (
      <View style={styles.StartCont}>
            <Text>Войти1</Text>
            <Text>Войти2</Text>
            <Text>Войти2</Text>
            <Text>Войти2</Text>
            <Text>Войти2</Text>
            <Text>Войти2</Text>
            <Text>Войти2</Text>
            <Text>Войти222222222222222222222222222222222222222</Text>
            <Button title="Start!" onPress={this._toStart} />
      </View>
    )
  }
}


export default ChoseCardsScreen
