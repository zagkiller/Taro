import React, { Component, PropTypes } from 'react'
import { View, Text, Button, Image } from 'react-native'
// import { connect } from 'react-redux'

// import LoginActions from '../../Redux/LoginRedux'
import { NavigationActions } from 'react-navigation';

import styles from './ChooseCardsScreenStyle'


class ChooseCardsScreen extends Component {

  constructor (props) {
    super(props);
  }

  _toStart = () => {
    //this.props.navigation.navigate('StartScreen');
  }

  render () {
    console.log('there');
    //this.props.navigation.navigate('StartScreen');
    return (
      <View style={styles.StartCont}>
            <Image
              style={{width: 150, height: 150}}
              source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
            />
            <Button title="Start!" onPress={this._toStart} />
      </View>
    )
  }
}


export default ChooseCardsScreen
