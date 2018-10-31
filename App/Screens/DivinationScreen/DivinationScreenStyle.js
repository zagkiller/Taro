import { StyleSheet, Dimensions } from 'react-native'
import { ApplicationStyles } from '../../Themes'
import Colors from "../../Themes/Colors";

var {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  ...ApplicationStyles.screen,
    StartCont: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        flexDirection: 'column',
        width: '100%', 
        backgroundColor: Colors.green,

    }, 
    styleCard: {
        height: height/5.5,
        width: width/6,  
        padding: 15,
        borderRadius: 5,
        backgroundColor: Colors.panther,
    }, 
    styleCardRotate: {
        height: height/5.5,
        width: width/6,  
        padding: 15,
        borderRadius: 5,
        backgroundColor: Colors.panther,
        transform: [{ rotate: '180deg'}],
    }, 
    cardTop: {
        flex:3,
        height: height/5,
        padding: 15,
        justifyContent: 'center',
        alignItems:'center',
        width: '100%', 
    }, 
    cardCenter: {
        flex:3,
        height: height/5,
        padding: 15,
        width: '100%', 
        justifyContent: 'space-around',
        alignItems:'center',
        backgroundColor: Colors.coal,
        flexDirection: 'row',
        
    }, 
    cardBottom: {
        flex:1,
        height: height/5,
        padding: 15,
        justifyContent: 'center',
        alignItems:'center',
        width: '100%', 
        backgroundColor: Colors.fire,
    }
})
