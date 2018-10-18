import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import Colors from "../../Themes/Colors";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  StartCont: {
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: Colors.kfc,
        padding: 20,
        width: '100%'
    }
})
