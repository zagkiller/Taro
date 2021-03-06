import React, { Component, PropTypes } from 'react'
import { View, Text, Button, Image } from 'react-native'

import NavigationService from "../../Navigation/NavigationService";

import styles from './ChooseCardsScreenStyle';
import CardList from '../../Shared/CardList';

class ChooseCardsScreen extends Component {

  constructor (props) {
    super(props);
  }

  _toStart = () => {
    this.props.navigation.navigate('StartScreen');
  }

  _getCountCard()  {
    let count = 22;
    if (this.props.navigation.state.params && this.props.navigation.state.params.count)
      count = this.props.navigation.state.params.count;
    return count;
  }
  _pressCard = (x) => {
    let curCountCard = this._getCountCard();
    if (curCountCard >= 19) {
      this.props.navigation.navigate('ChooseCards', { count: curCountCard - 1 });
    } else {
      this.props.navigation.navigate('DivinationScreen');
    }
    
  }

   render () {
    const bgImage = require('../../Data/images/bs.jpg');
    return (
      <View style={styles.StartCont}>
          <Text>Выбери 5 карт</Text>    
          <CardList count={ this._getCountCard() } onPress={this._pressCard} bgImage={bgImage} styleCard={styles.styleCard}/>
          <Button title="Start!" onPress={this._toStart} />            
      </View>
    )
  }
}


export default ChooseCardsScreen