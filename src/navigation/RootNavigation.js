import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../screens/Home'
import RestaurantDetail from '../screens/RestaurantDetail'
import { Provider } from 'react-redux'
import store from '../redux/store'
import OrderCompleted from '../screens/OrderCompleted'

const RootNavigation = () => {
    const Stack = createNativeStackNavigator()

    // const store = configureStore()

    const screenOptions = {
        headerShown : false
    }
  return (
    <Provider store={store}>
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='RestaurantDetail' component={RestaurantDetail}/>
            <Stack.Screen name='OrderCompleted' component={OrderCompleted}/>
        </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default RootNavigation

const styles = StyleSheet.create({})