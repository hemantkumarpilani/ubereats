import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import colors from '../../utils/colors'

const BottomTabs = () => {
  return (
    <View style={styles.outerContainer}>
        <Icon icon= 'home' text='Home'/>
        <Icon icon= 'search' text='Browse'/>
        <Icon icon= 'shopping-bag' text='Grocery'/>
        <Icon icon= 'receipt' text='Orders'/>
        <Icon icon= 'user' text='Account'/>
    </View>
  )
}

const Icon = (props)=>(
    <View>
        <FontAwesome5 name={props?.icon} size={25} style={styles.icon}/>
        <Text>{props?.text}</Text>
    </View>
)

export default BottomTabs

const styles = StyleSheet.create({
    outerContainer :{
        flexDirection:'row',
        margin:10,
        marginHorizontal:30,
        justifyContent:'space-between'
    },
    icon :{
        marginBottom:3,
        alignSelf:"center",
        color:colors.black
    }
})