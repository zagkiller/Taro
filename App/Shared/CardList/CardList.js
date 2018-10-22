import React, { PureComponent } from 'react'
import { Image, View, TouchableHighlight, Dimensions} from 'react-native'

import Card from '../Card';
import CardListStyle from './CardListStyle';

class CardList extends PureComponent {

  _getCards(count, bgImage, onPress, styleCard){
    var output=[];
    for (i = 0; i < count; i++) {
          output[i] = (<Card keyX={i} key={i} bgImage={bgImage} onPress={onPress}  styleCard={styleCard}/>);
    }
    return(
      <View style={CardListStyle.allCards} >{output}</View>            
      
    );
  }
  
  render () {
    const {count, bgImage, onPress, styleCard} = this.props;
    return this._getCards(count, bgImage, onPress, styleCard);

  }
}


export default CardList;