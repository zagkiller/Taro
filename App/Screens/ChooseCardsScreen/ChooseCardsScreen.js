import React, { Component, PropTypes } from 'react'
import { View, Text, Button, Image } from 'react-native'

import styles from './ChooseCardsScreenStyle';
import CardList from '../../Shared/CardList';

class ChooseCardsScreen extends Component {

  constructor (props) {
    super(props);
  }

  _toStart = () => {
    this.props.navigation.navigate('StartScreen');
  }

  _pressCard = () => {
    console.log('1111');
  }

   render () {
    const bgImage = require('../../Data/images/bs.jpg');
    return (
      <View style={styles.StartCont}>
          <Text>Выбери 5 карт</Text>    
          <CardList count={22} onPress={this._pressCard} bgImage={bgImage} styleCard={styles.styleCard}/>
          <Button title="Start!" onPress={this._toStart} />            
      </View>
    )
  }
}


export default ChooseCardsScreen