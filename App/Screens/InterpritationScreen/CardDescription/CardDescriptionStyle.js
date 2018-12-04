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
        paddingBottom: 12,
    }, 
    textBox: {
        flex: 1,
        flexDirection: 'column',
        padding: 4,
    }, 
    title: {
        paddingBottom: 12,
        fontWeight: '700',
        fontSize: 16,
    }, 
    textSmall: {
        fontSize: 12,
        flexWrap: 'wrap',
    }, 
    text: {
        paddingTop: 8,
        fontSize: 14,
        flexWrap: 'wrap',
    }, 
})
