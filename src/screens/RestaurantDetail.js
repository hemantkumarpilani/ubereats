import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import About from '../components/restaurantDetail/About'
import MenuItems from '../components/restaurantDetail/MenuItems'
import ViewCart from '../components/restaurantDetail/ViewCart'

const RestaurantDetail = ({route, navigation}) => {
  const foods = [
    {
      title: 'Lasagna',
      description: 'With butter lettuce, tomato and sauce becamel',
      price: '$13.50',
      image:
        'https://thecozycook.com/wp-content/uploads/2022/04/Lasagna-Recipe-f.jpg',
    },
    {
      title: 'Tandoori Chicken',
      description:
        'Amazing indian dish with ternderloin chicken off the sizzles ',
      price: '$19.20',
      image:
        'https://www.easycookingwithmolly.com/wp-content/uploads/2023/11/air-fryer-whole-tandoori-chicken-3-480x480.jpg',
    },
    {
      title: 'Chilaquiles',
      description:
        'Chilaquiles with chesse and sauce. A delicious mexican dish',
      price: '$13.50',
      image:
        'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2019-05-How-To-Chilaquiles%2FJoeLingeman_2019-04-22_PHOTO_Kitchn65454_HT_Chilaquiles',
    },
    {
      title: 'Chicken Caesar Salad',
      description:
        'One can never go wrong with a chicken caesar salad. Healthy Options with greens and proteins',
      price: '$21.50',
      image:
        'https://www.jessicagavin.com/wp-content/uploads/2022/06/chicken-caesar-salad-28-1200.jpg',
    },
    {
      title: 'Lasagna',
      description: 'With butter lettuce, tomato and sauce becamel',
      price: '$13.50',
      image:
        'https://thecozycook.com/wp-content/uploads/2022/04/Lasagna-Recipe-f.jpg',
    },
  ];
  return (
    <>
     <View>
        <About route={route}/>
     <Divider width={1}/>
    </View> 
    <ScrollView showsVerticalScrollIndicator={false}>
    <MenuItems restaurantName={route.params.name} foods={foods}/>
    </ScrollView>
    <View>
    <ViewCart navigation={navigation} restaurantName={route.params.name}/>
    </View>
   
    </>
   
  )
}

export default RestaurantDetail

const styles = StyleSheet.create({})