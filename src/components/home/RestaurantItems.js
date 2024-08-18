import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import colors from '../../utils/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const localRestaurants = [
  {
    name: 'Radhika Restaurant',
    image_url:
      'https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: 'Ashapuri Dining Hall',
    image_url:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "Shiv Sagar",
    image_url:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    categories: ['Indian', 'Bar'],
    price: '$$',
    reviews: 700,
    rating: 4.9,
  },
];

const RestaurantItems = ({ navigation, ...props }) => {
  return (
    <>
      {props?.restaurantsData?.map((restaurant, index) => (
        <TouchableOpacity activeOpacity={1} key={index} onPress={()=>navigation.navigate('RestaurantDetail', {
          name : restaurant.name,
          image : restaurant.image_url,
          price : restaurant.price,
          reviews : restaurant.review_count,
          rating : restaurant.rating,
          categories : restaurant.categories
        })}>
          <View style={styles.outerContainer}>
            <RestaurantImage image={restaurant?.image_url} />
            <RestaurantInfo name={restaurant?.name} rating={restaurant?.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>


  );
};

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props?.image,
      }}
      style={styles.image}
    />
    <TouchableOpacity style={styles.favouriteIconContainer}>
      <MaterialCommunityIcons name='heart-outline' size={25} color={colors.white} />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View style={styles.restaurantNameAndDeliveryTimeConatiner}>
    <View>
      <Text>{props?.name}</Text>
      <Text>30-45 • min</Text>
    </View>
    <View style={styles.ratingContainer}>
      <Text>{props?.rating}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 180,
  },
  ratingContainer: {
    backgroundColor: colors.grey,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  restaurantNameAndDeliveryTimeConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  outerContainer: {
    marginTop: 10,
    padding: 15,
    backgroundColor: colors.white,
  },
  favouriteIconContainer: {
    position: 'absolute',
    right: 20,
    top: 20
  }
});

export default RestaurantItems;
