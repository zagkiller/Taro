import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import Colors from "../../Themes/Colors";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  StartCont: {
        justifyContent: 'space-around',
        alignItems: "center",
        backgroundColor: Colors.kfc,
        padding: 200,
    }
})
