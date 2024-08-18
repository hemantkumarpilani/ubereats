import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../utils/colors'

const OrderItems = ({item}) => {
    const {title, price} = item
  return (
    <View style={styles.outerContainer}>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.priceText}>{price}</Text>
    </View>
  )
}

export default OrderItems

const styles = StyleSheet.create({
    outerContainer :{
        flexDirection:'row',
        justifyContent:'space-between', 
        padding:20,
        borderBottomWidth:1,
        borderBottomColor:colors.millionGrey
    },
    titleText:{
        fontWeight:'600',
        fontSize:16
    },
    priceText:{
        opacity:0.7,
        fontSize:16
    }
})