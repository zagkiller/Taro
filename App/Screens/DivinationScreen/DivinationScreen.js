import React, { Component, PropTypes } from 'react'
import { View, Text, Button, Image } from 'react-native'
/*
import { connect } from 'react-redux';
import { getCards } from "../../Redux/CardsRedux";
*/

import NavigationService from "../../Navigation/NavigationService";

import styles from './DivinationScreenStyle';
import Card from '../../Shared/Card';

function _generateCards(){
  console.log("FUN");
}

class DivinationScreen extends Component {

  constructor (props) {
    super(props);
  }

  _toStart = () => {
    this.props.navigation.navigate('StartScreen');
  }
 
  componentDidMount(){
    //this.props.generateCards();  
    //console.log("componentDidMount()");
  }

  _pressCard = (x) => {
   
  }

   render () {
    const bgImage = require('../../Data/images/bs.jpg');
    return (
      <View style={styles.StartCont}>
          <View style={styles.cardTop}>
              <Card keyX={1} key={1} bgImage={bgImage} onPress={this._pressCard}  styleCard={styles.styleCard}/>
          </View>    
          <View style={styles.cardCenter}>
              <Card keyX={2} key={2} bgImage={bgImage} onPress={this._pressCard}  styleCard={styles.styleCard}/>   
              <Card keyX={3} key={3} bgImage={bgImage} onPress={this._pressCard}  styleCard={styles.styleCard}/>   
              <Card keyX={4} key={4} bgImage={bgImage} onPress={this._pressCard}  styleCard={styles.styleCard}/>   
          </View>    
          <View style={styles.cardTop}>
              <Card keyX={5} key={5} bgImage={bgImage} onPress={this._pressCard}  styleCard={styles.styleCard}/>
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