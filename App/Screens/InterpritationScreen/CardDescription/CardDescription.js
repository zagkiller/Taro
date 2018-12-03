import React, { PureComponent } from 'react'
import { Image, View, Text } from 'react-native'

import styles from './CardDescriptionStyle';

class CardDescription extends PureComponent {


  render () {
    const { cardId, cardTurn, cardItem, pos } = this.props;
    //console.log(cardTurn);
//    console.log(cardItem.description.down, cardItem.description.up);

    let position = cardTurn ? cardItem.description.up : cardItem.description.down;
    imStyle = cardTurn ? {} : styles.styleCardRotate;
  //  console.log(position);
    return (
      <View key={cardId} style={styles.content}>
          <View style={styles.imBox}>
            <Image source={cardItem.image} style={imStyle}/>
            <View style={styles.textBox}>
              <Text style={styles.title}>{cardItem.title}</Text>
              <Text style={styles.text}>{cardItem.text}</Text>
            </View>
          </View>
          <Text style={styles.text}>{position[pos]}</Text>
      </View>
    )
  }
}


export default CardDescription;