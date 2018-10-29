import { createStackNavigator, createSwitchNavigator } from 'react-navigation'

import StartScreen from '../Screens/StartScreen'
import ChooseCardsScreen from '../Screens/ChooseCardsScreen'
import DivinationScreen from '../Screens/DivinationScreen'

const ChooseStack = createStackNavigator(
  { ChooseCards: ChooseCardsScreen, DivinationScreen: DivinationScreen },
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