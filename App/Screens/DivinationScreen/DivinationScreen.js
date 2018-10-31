import React, { Component, PropTypes } from 'react'
import { View, Text, Button, Image } from 'react-native'
/*
import { connect } from 'react-redux';
import { getCards } from "../../Redux/CardsRedux";
*/

import NavigationService from "../../Navigation/NavigationService";

import styles from './DivinationScreenStyle';
import Card from '../../Shared/Card';

let cardsId = [];
function _generateCards(){
  cardsId = [1,2,3,4,5];
  return cardsId;
}

class DivinationScreen extends Component {

  constructor (props) {
    super(props);
    this.state = {
      cardsId: [],
      cardsItems: require('./cards.json'),

    }
  }

  _toStart = () => {
    this.props.navigation.navigate('StartScreen');
  }
 
  componentDidMount(){
    _generateCards();
    this.setState({
      cardsId: [1,2,3,4,5]
    })
  }

  _pressCard = (x) => {
      console.log(x);
  }

   render () {
    const bgImage = require('../../Data/images/bs.jpg');
    return (
      <View style={styles.StartCont}>
          <View style={styles.cardTop}>
              <Card idCard={cardsId[0]} key={1} bgImage={bgImage} onPress={this._pressCard}  styleCard={styles.styleCard}/>
          </View>    
          <View style={styles.cardCenter}>
              <Card idCard={cardsId[1]} key={2} bgImage={bgImage} onPress={this._pressCard}  styleCard={styles.styleCard}/>   
              <Card idCard={cardsId[2]} key={3} bgImage={bgImage} onPress={this._pressCard}  styleCard={styles.styleCard}/>   
              <Card idCard={cardsId[3]} key={4} bgImage={bgImage} onPress={this._pressCard}  styleCard={styles.styleCard}/>   
          </View>    
          <View style={styles.cardTop}>
              <Card idCard={cardsId[4]} key={5} bgImage={bgImage} onPress={this._pressCard}  styleCard={styles.styleCard}/>
          </View>    
          <View style={styles.cardBottom}>
              <Button title="Start!" onPress={this._toStart} />            
          </View>    
      </View>
    )
  }
}

const mapStateToProps = state => ({
  cards: getCards(state),
});

const mapDispatchToProps = dispatch => {
  return {
    generateCards: () => {
      dispatch(_generateCards)
    }
  }
}

//export default connect(mapStateToProps, mapDispatchToProps)(DivinationScreen);
export default DivinationScreen;