import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  StartCont: {
        justifyContent: 'space-around',
        alignItems: "center",
        flexDirection: 'row'

    }
})
