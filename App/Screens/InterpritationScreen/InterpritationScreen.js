import React, { Component, PropTypes } from 'react'
import { ScrollView, View, Text, Button } from 'react-native'

import styles from './InterpritationScreenStyle'
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';

class InterpritationScreen extends Component {

    constructor(props) {
        super(props);

    }

    _toStart = () => {
        this.props.navigation.navigate('StartScreen');
    }

    render() {
        console.log('Int', this.props.navigation.state.params.idCard);
        return (
            <View style={styles.StartCont}>
                <ScrollableTabView
                    style={{marginTop: 20, }}
                    initialPage={0}
                    renderTabBar={() => <DefaultTabBar />}
                >
                    <Text tabLabel='Суть проблемы'>My</Text>
                    <Text tabLabel='Что мешает'>favorite</Text>
                    <Text tabLabel='Что поможет'>project</Text>
                    <Text tabLabel='Совет'>favorite</Text>
                    <Text tabLabel='Вероятный итог'>project</Text>
                </ScrollableTabView>
                <Button title="Start!" onPress={this._toStart} />
            </View>
        )
    }
}


export default InterpritationScreen
