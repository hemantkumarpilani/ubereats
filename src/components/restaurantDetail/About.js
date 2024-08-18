import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../utils/colors'

const About = (props) => {
  const yelpRestaurantInfo = {
    name : 'Farmhouse Kitchen Thai Cuisine',
    image : 'https://assets.architecturaldigest.in/photos/6385cf3311f0276636badfb6/16:9/w_2560%2Cc_limit/DSC_8367-Edit-W.png',
    price : "$$",
    reviews : '1500',
    rating :4.5,
    categories : [{title : 'Thai'}, {title : 'Comfort Food'}]
  }

  const {name, image, price, reviews, categories,rating} = props?.route?.params

  const formattedCategories = categories.map((cat)=>cat.title).join(" • ")

  const description = `${formattedCategories} ${price ? "• " + price : ''} • 🎫 • ${rating} ⭐️ (${reviews})` 

  // const image = "https://assets.architecturaldigest.in/photos/6385cf3311f0276636badfb6/16:9/w_2560%2Cc_limit/DSC_8367-Edit-W.png"
  // const title = "Farmhouse Kitchen Thai Cuisine"
  // const description = 'Thai • Comfort Food • $$ • 🎫 • 4 ⭐️ (2913+)'
  return (
    <View>
     <RestaurantImage image = {image}/>
     <RestaurantName name={name}/>
     <RestaurantDescription  description={description}/>
    </View>
  )
}

const RestaurantImage = (props)=>(
  <Image source={{uri : props?.image}} style={styles.restaurantImage}/>
)

const RestaurantName = (props)=>(
  <Text style={styles?.restaurantTitle}>{props?.name}</Text>
)

const RestaurantDescription= (props)=>(
  <Text style={styles?.restaurantDescription}>{props?.description}</Text>
)
export default About

const styles = StyleSheet.create({
  restaurantImage :{
    width:'100%',
    height:200
  },
  restaurantTitle :{
    fontSize:29,
    fontWeight:'600',
    color :colors?.black,
    marginHorizontal:15
  },
  restaurantDescription:{
    // marginTop:10,
    marginHorizontal:15,
    fontWeight:'400',
    fontSize:15.5
  }
})