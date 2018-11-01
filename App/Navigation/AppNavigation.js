import { createStackNavigator, createSwitchNavigator } from 'react-navigation'

import StartScreen from '../Screens/StartScreen'
import ChooseCardsScreen from '../Screens/ChooseCardsScreen'
import DivinationScreen from '../Screens/DivinationScreen'
import InterpritationScreen from '../Screens/InterpritationScreen'

const ChooseStack = createStackNavigator(
  { ChooseCards: ChooseCardsScreen, DivinationScreen: DivinationScreen, InterpritationScreen: InterpritationScreen },
  {
    navigationOptions: {
        header: null
    }
});

const PrimaryNav = createSwitchNavigator(
  {
    StartScreen: StartScreen,
    Choose: ChooseStack
  },
  {
    initialRouteName: 'StartScreen'
  }
)
export default PrimaryNav