import React, { Component, PropTypes } from 'react'
import { View, Text, Button, Image } from 'react-native'
/*
import { connect } from 'react-redux';
import { getCards } from "../../Redux/CardsRedux";
*/

import NavigationService from "../../Navigation/NavigationService";

import styles from './DivinationScreenStyle';
import Card from '../../Shared/Card';

function rand(){
  return Math.floor( Math.random()*22);
}

function _generateCards(){
  let masCard = [];
  masCard.push(rand());
  let i = 1;
  while( i < 5 ){
      let x = rand();
      if(masCard.indexOf(x) == -1 && x >0 && x <22){
          i++;
          masCard.push(x);
      }
  }
  return masCard;
}

function _generateCardsTurn(){
  let masCard = [];
  while( i < 5 ){
    if (Math.round( Math.random()))
      masCard.push(true);
    else
      masCard.push(false);
      i++;
  }
  return masCard;
}

class DivinationScreen extends Component {

  constructor (props) {
    super(props);
    this.state = {
      cardsId: _generateCards(),
      cardsTurn: _generateCardsTurn(),
      cardsItems: require('../../Data/TaroDeck.json'),

    }
  }

  _toStart = () => {
    this.props.navigation.navigate('StartScreen');
  }
 
  // componentDidMount(){
  //   _generateCards();
  //   this.setState({
  //     cardsId: [1,2,3,4,5]
  //   })
  // }

  _pressCard = (x) => {
      console.log(x);
  }

   render () {
    const bgImage = require('../../Data/images/bs.jpg');
    return (
      <View style={styles.StartCont}>
          <View style={styles.cardTop}>
              <Card idCard={this.state.cardsId[0]} key={1}  openImage={this.state.cardsItems[this.state.cardsId[0]-1]} bgImage={bgImage} onPress={this._pressCard}  styleCard={styles.styleCard}/>
          </View>    
          <View style={styles.cardCenter}>
              <Card idCard={this.state.cardsId[1]} key={2} openImage={this.state.cardsItems[this.state.cardsId[1]-1]} bgImage={bgImage} onPress={this._pressCard}  styleCard={styles.styleCard}/>   
              <Card idCard={this.state.cardsId[2]} key={3} openImage={this.state.cardsItems[this.state.cardsId[2]-1]} bgImage={bgImage} onPress={this._pressCard}  styleCard={styles.styleCard}/>   
              <Card idCard={this.state.cardsId[3]} key={4} openImage={this.state.cardsItems[this.state.cardsId[3]-1]} bgImage={bgImage} onPress={this._pressCard}  styleCard={styles.styleCard}/>   
          </View>    
          <View style={styles.cardTop}>
              <Card idCard={this.state.cardsId[4]} key={5} openImage={this.state.cardsItems[this.state.cardsId[4]-1]} bgImage={bgImage} onPress={this._pressCard}  styleCard={styles.styleCardRotate}/>
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