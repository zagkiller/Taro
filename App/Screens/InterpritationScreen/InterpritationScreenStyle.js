import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import Colors from "../../Themes/Colors";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  StartCont: {
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: Colors.cloud,
        padding: 10,
        width: '100%',
        height:'100%'
    }
})
