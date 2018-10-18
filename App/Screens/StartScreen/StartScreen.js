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
    this.props.navigation.navigate('ChooseCards');
  }
  render () {
    console.log('Here');
    return (
      <View style={styles.StartCont}>
          <Button title="Start!" onPress={this._toStart} />
      </View>
    )
  }
}


export default StartScreen
