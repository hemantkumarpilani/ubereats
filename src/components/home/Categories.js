import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../utils/colors';

const Categories = () => {
    const items = [
        {
          image: require("../../assets/images/shopping-bag.png"),
          text: "Pick-up",
        },
        {
          image: require("../../assets/images/soft-drink.png"),
          text: "Soft Drinks",
        },
        {
          image: require("../../assets/images/bread.png"),
          text: "Bakery Items",
        },
        {
          image: require("../../assets/images/fast-food.png"),
          text: "Fast Foods",
        },
        {
          image: require("../../assets/images/deals.png"),
          text: "Deals",
        },
        {
          image: require("../../assets/images/coffee.png"),
          text: "Coffee & Tea",
        },
        {
          image: require("../../assets/images/desserts.png"),
          text: "Desserts",
        },
      ];
  return (
    <View style={styles.outerContainer}>
     <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items?.map((item, index)=>(
            <View key={index} style={styles.imageAndTextContainer}>
                <Image source={item.image} style={styles.image}/>
                <Text style={styles.text}>{item.text}</Text>
            </View>
        ))}
     </ScrollView>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    outerContainer :{
        marginTop:5,
        backgroundColor:colors.white,
        paddingVertical:10,
        paddingLeft:20
    },
    imageAndTextContainer :{
        alignItems:'center',
        marginRight:30
    },
    image:{
        width:50,
        height:40,
        resizeMode:'contain'
    },
    text:{
        fontSize:13,
        fontWeight:'900',
        color:colors.black
    }
})