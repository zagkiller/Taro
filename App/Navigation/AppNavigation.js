import { createStackNavigator, createSwitchNavigator } from 'react-navigation'

import StartScreen from '../Screens/StartScreen'
import ChooseCardsScreen from '../Screens/ChooseCardsScreen'

const ChooseStack = createStackNavigator(
  {ChooseCards:ChooseCardsScreen},
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