import React, { PureComponent } from 'react'
import { Image, View, TouchableHighlight } from 'react-native'

class Card extends PureComponent {

  render () {
    const {onPress, bgImage, styleCard} = this.props;

    return (
      <TouchableHighlight onPress={onPress} >
          <Image source={bgImage} style={styleCard} />
      </TouchableHighlight>
    )
  }
}


export default Card;