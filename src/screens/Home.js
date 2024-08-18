import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderTabs from '../components/home/HeaderTabs';
import SearchBar from '../components/home/SearchBar';
import colors from '../utils/colors';
import Categories from '../components/home/Categories';
import {Divider} from 'react-native-elements';
import RestaurantItems, {
  localRestaurants,
} from '../components/home/RestaurantItems';
import BottomTabs from '../components/home/BottomTabs';
import { ScreenHeight, ScreenWidth } from 'react-native-elements/dist/helpers';

const Home = ({navigation}) => {
  const YELP_API_KEY =
    '8kjG5MmgbIb5pXVmc8n29iuFDWaSfm0u1CPFViX0-GH-Nu8d0ZyKmUbI90ui6X4P4wOCRHBlBeBDo4M57EV7DcWRtQN_H7hC3drGSDyEVlCTqbgGQH3YS38LW81zZnYx';
  const [restaurantsData, setRestaurantsData] = useState();
  const [city, setCity] = useState('San Francisco');
  const [activeTab, setActiveTab] = useState('Delivery');

  const getRestaurantsFromYelp = () => {
    setRestaurantsData()
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOpttions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOpttions)
      .then(res => res.json())
      .then(json =>
        setRestaurantsData(
          json.businesses.filter(business =>
            business.transactions.includes(activeTab.toLowerCase()),
          ),
        ),
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.outerViewContainer}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        {restaurantsData ? (
          <RestaurantItems
            restaurantsData={restaurantsData}
            navigation={navigation}
          />
        ) : (
          <View style={{ height:ScreenWidth, justifyContent:'center', marginTop:30}}>
            <ActivityIndicator size={'large'}/>
          </View>
        )}
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeAreaContainer: {
    backgroundColor: colors.grey,
    flex: 1,
  },
  outerViewContainer: {
    backgroundColor: colors.white,
    padding: 15,
  },
});
