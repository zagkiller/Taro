import React, { PureComponent } from 'react'
import { Image, View, TouchableHighlight } from 'react-native'

class Card extends PureComponent {

  render () {
    const {idCard, onPress, bgImage, styleCard} = this.props;
    console.log(idCard);
    return (
      <TouchableHighlight key={idCard} onPress={() => { onPress(idCard) } } >
          <Image source={bgImage} style={styleCard} />
      </TouchableHighlight>
    )
  }
}


export default Card;