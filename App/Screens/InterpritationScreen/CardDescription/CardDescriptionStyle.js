import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../../Themes/'
import Colors from "../../../Themes/Colors";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  content: {
        justifyContent: 'center',
        flexDirection: 'column',
        flex: 1,
    },
    styleCardRotate: {
        transform: [{ rotate: '180deg'}],
    }, 
    imBox: {
        flex: 1,
        flexDirection: 'row',
    }, 
    textBox: {
        flex: 1,
        flexDirection: 'column',
        padding: 8,
    }, 
    title: {
        fontWeight: '700',
        fontSize: 16,
    }, 
    text: {
        fontSize: 14,
        flexWrap: 'wrap',
    }, 
})
