import React, { PureComponent } from 'react'
import { Image, View, TouchableHighlight } from 'react-native'

class Card extends PureComponent {

  render () {
    const {keyX, onPress, bgImage, styleCard} = this.props;
console.log(keyX);
    return (
      <TouchableHighlight key={keyX} onPress={() => { onPress(keyX) } } >
          <Image source={bgImage} style={styleCard} />
      </TouchableHighlight>
    )
  }
}


export default Card;