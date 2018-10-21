import { StyleSheet, Dimensions } from 'react-native'
import { ApplicationStyles } from '../../Themes'
import Colors from "../../Themes/Colors";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  allCards: {
        flexDirection:'row',
        flexWrap: 'wrap',
        alignContent: 'flex-start',
        alignItems: 'flex-start',
    }
})
