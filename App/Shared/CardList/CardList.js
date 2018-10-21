import React, { PureComponent } from 'react'
import { Image, View, TouchableHighlight, Dimensions} from 'react-native'

import Card from '../Card';
import CardListStyle from './CardListStyle';

class CardList extends PureComponent {

  _getCards(count, bgImage, onPress, styleCard){
    var output=[];
    for (i = 0; i < count; i++) {
          output[i] = (<Card key={i} bgImage={bgImage} onPress={onPress} styleCard={styleCard}/>);
    }
    return(
      <View style={CardListStyle.allCards} >{output}</View>            
      
    );
  }
  
  render () {
    var {height, width} = Dimensions.get('window');
console.log('wh',height,width);
    const {count, bgImage, onPress, styleCard} = this.props;
    return this._getCards(count, bgImage, onPress, styleCard);

  }
}


export default CardList;