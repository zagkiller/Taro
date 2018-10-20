import React, { PureComponent } from 'react'
import { Image, View } from 'react-native'
import styles from './CardStyle'

class StartScreen extends PureComponent {

  constructor (props) {
    super(props)

  }

  _onPress = () => {
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
