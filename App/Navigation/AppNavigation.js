import { createStackNavigator, createSwitchNavigator } from 'react-navigation'

import StartScreen from '../Screens/StartScreen'
import ChooseCardsScreen from '../Screens/ChooseCardsScreen'

import styles from './Styles/NavigationStyles'
const ChooseStack = createStackNavigator({ChooseCards:ChooseCardsScreen})

const PrimaryNav = createSwitchNavigator(
  {
    StartScreen: StartScreen,
    ChooseCardsScreen: ChooseStack
  },
  {
    initialRouteName: 'StartScreen'
  }
)
export default PrimaryNav