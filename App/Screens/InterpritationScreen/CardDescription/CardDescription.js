import React, { PureComponent } from 'react'
import { Image, View, Text } from 'react-native'

class CardDescription extends PureComponent {


  render () {
    const { cardId, cardTurn, cardItem } = this.props;
    return (
      <View key={cardId} style={{ width: 130 }}>
          <Image source={cardItem.image} />
          <Text>{cardItem.title}</Text>
      </View>
    )
  }
}


export default CardDescription;