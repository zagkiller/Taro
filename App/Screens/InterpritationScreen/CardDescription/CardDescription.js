import React, { PureComponent } from 'react'
import { Image, View, Text } from 'react-native'

class CardDescription extends PureComponent {


  render () {
    const { cardId, cardTurn, cardItem, pos } = this.props;
    let position = cardTurn ? cardItem.description.down : cardItem.description.up;
    //console.log(cardItem.description);
    return (
      <View key={cardId} style={{ width: 130 }}>
          <Image source={cardItem.image} />
          <Text>{cardItem.title}</Text>
          <Text>{position[pos]}</Text>
      </View>
    )
  }
}


export default CardDescription;