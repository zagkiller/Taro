import { createStackNavigator, createSwitchNavigator } from 'react-navigation'

import StartScreen from '../Screens/StartScreen'
import ChoseCardsScreen from '../Screens/ChoseCardsScreen'

import styles from './Styles/NavigationStyles'
const ChoseStack = createStackNavigator({Chose:ChoseCardsScreen})

const PrimaryNav = createSwitchNavigator(
  {
    StartScreen: StartScreen,
//    ChoseCardsScreen: ChoseStack
  },
  {
    initialRouteName: 'StartScreen',
    navigationOptions: {
      headerStyle: styles.header
    }
  }
)
export default PrimaryNav
