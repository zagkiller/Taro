import React, { Component } from 'react'
import { View, StatusBar,Text } from 'react-native'
// import { connect } from 'react-redux'
// import StartupActions from '../Redux/StartupRedux'
// import ReduxPersist from '../Config/ReduxPersist'
import NavigationService from '../Navigation/NavigationService';

// Styles
import styles from './Styles/RootContainerStyles'
import AppNavigation from '../Navigation/AppNavigation'

class RootContainer extends Component {

  render () {
    return (
      <View>
        <AppNavigation
          ref={(navigatorRef) => {NavigationService.setTopLevelNavigator(navigatorRef);}}
          persistenceKey={"navigation"}
        />
      </View>
    )
  }
}

export default RootContainer
