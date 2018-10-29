import { StyleSheet, Dimensions } from 'react-native'
import { ApplicationStyles } from '../../Themes'
import Colors from "../../Themes/Colors";

var {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  ...ApplicationStyles.screen,
    StartCont: {
        flex:1,
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: Colors.cloud,

    }, 
    styleCard: {
        height: height/5,
        width: width/7+5,  
        padding: 15
    }
})
