import React, { Component, PropTypes } from 'react'
import { View, Text, Button } from 'react-native'

import styles from './InterpritationScreenStyle'

class InterpritationScreen extends Component {

  constructor (props) {
    super(props);

  }

  _toStart = () => {
    this.props.navigation.navigate('StartScreen');
  }

  render () {
    console.log('Int', this.props.navigation.state.params.idCard);
    return (
      <View style={styles.StartCont}>
          <Button title="Start!" onPress={this._toStart} />
      </View>
    )
  }
}


export default InterpritationScreen
