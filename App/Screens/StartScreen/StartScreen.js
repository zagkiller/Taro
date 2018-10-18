import React, { Component, PropTypes } from 'react'
import { View, Text, Button } from 'react-native'
// import { connect } from 'react-redux'

// import LoginActions from '../../Redux/LoginRedux'
import { NavigationActions } from 'react-navigation';

import styles from './StartScreenStyle'

class StartScreen extends Component {

  constructor (props) {
    super(props)

  }

  _toStart = () => {
    this.props.navigation.navigate('ChoseCardsScreen');
  }
  render () {
    console.log('Here');
    return (
      <View style={styles.StartCont}>
      <Text>1111111111111111222222555522222233333333333333333</Text>
            <Button title="Start!" onPress={this._toStart} />
            <Button
              onPress={this._toStart}
              title="Learn More"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
            <Text>1111111111111111222222222222222233333333333333333</Text>
      </View>
    )
  }
}


export default StartScreen
