import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../utils/colors';
import {Divider} from 'react-native-elements';
import Checkbox from 'react-native-bouncy-checkbox';
import {useDispatch, useSelector} from 'react-redux';



const MenuItems = ({restaurantName, foods, hideCheckBox, marginLeft}) => {
  const dispatch = useDispatch();

  const selectItem = (item, checkBoxValue) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkBoxValue: checkBoxValue,
      },
    });
  };

  

  const cartItems = useSelector(state => state.cart.selectedItems.items);

  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find(item => item.title === food.title));
  return (
    <View showsVerticalScrollIndicator={false}>
      {foods?.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemsContainer}>
            {hideCheckBox ? null : (
              <Checkbox
                iconStyle={{borderColor: 'lightgray'}}
                fillColor="green"
                onPress={checkBoxValue => selectItem(food, checkBoxValue)}
                isChecked={isFoodInCart(food, cartItems)}
              />
            )}
            <FoodInfo food={food} />
            <FoodImage food={food} marginLeft = {marginLeft ? marginLeft : 0}/>
          </View>
          <Divider width={0.5} style={styles.divider} />
        </View>
      ))}
    </View>
  );
};

const FoodInfo = props => (
  <View style={styles.foodInfoContainer}>
    <Text style={styles.title}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = ({marginLeft, ...props}) => (
  <View>
    <Image source={{uri: props.food.image}} style={[styles.image, {marginLeft : marginLeft}]} />
  </View>
);

export default MenuItems;

const styles = StyleSheet.create({
  menuItemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  foodInfoContainer: {
    width: 240,
    justifyContent: 'space-evenly',
  },
  title: {
    color: colors.black,
    fontSize: 19,
    fontWeight: '600',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  divider: {
    marginHorizontal: 20,
  },
});
