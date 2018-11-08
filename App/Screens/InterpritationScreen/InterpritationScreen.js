import React, { Component, PropTypes } from 'react'
import { ScrollView, View, Text, Button } from 'react-native'

import styles from './InterpritationScreenStyle'
import CardDescription from './CardDescription'
import ScrollableTabView, {ScrollableTabBar, } from 'react-native-scrollable-tab-view';

class InterpritationScreen extends Component {

    constructor(props) {
        super(props);

    }

    _toStart = () => {
        this.props.navigation.navigate('StartScreen');
    }

    render() {
        let { idCard, cardTurn, cardsItems } =  this.props.navigation.state.params;
        // console.log(cardsItems[0]); return null;
        return (
            <View style={styles.StartCont}>
                <ScrollableTabView
                    style={{marginTop: 10}}
                    initialPage={0}
                    tabBarUnderlineStyle={{backgroundColor: '#00f'}}
                    tabBarTextStyle={{fontWeight: '300', color: '#000' }}
                    renderTabBar={() => <ScrollableTabBar style={{ borderBottomWidth: 0 }}/>}
                >
                    <CardDescription tabLabel='Суть проблемы' cardId={idCard[0]} cardTurn={cardTurn[0]} cardItem={cardsItems[0]} style={{ width: 130 }} />
                    <CardDescription tabLabel='Что мешает'cardId={idCard[1]} cardTurn={cardTurn[1]} cardItem={cardsItems[1]} style={{ width: 130 }}/>
                    <CardDescription tabLabel='Что поможет' cardId={idCard[2]} cardTurn={cardTurn[2]} cardItem={cardsItems[2]} style={{ width: 130 }}/>
                    <CardDescription tabLabel='Совет' cardId={idCard[3]} cardTurn={cardTurn[3]} cardItem={cardsItems[3]} style={{ width: 130 }}/>
                    <CardDescription tabLabel='Вероятный итог' cardId={idCard[4]} cardTurn={cardTurn[4]} cardItem={cardsItems[4]} style={{ width: 130 }}/>
                </ScrollableTabView>
                <Button title="Start!" onPress={this._toStart} />
            </View>
        )
    }
}


export default InterpritationScreen
