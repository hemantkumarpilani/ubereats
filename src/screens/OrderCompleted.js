import {ActivityIndicator, Animated, Easing, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import LottieView from 'lottie-react-native';
import colors from '../utils/colors';
import animation from '../assets/animations/checkmark.json'
import {
  orderBy,
  Firestore,
  getDoc,
  doc,
  getFirestore,
  collection,
  onSnapshot,
} from 'firebase/firestore';
import MenuItems from '../components/restaurantDetail/MenuItems';
import { Image } from 'react-native';
// import  {app, db, getFirestore, collection, addDoc} from '../firebase/firebase'
const OrderCompleted = (props) => {
  console.log('props', props.route.params.itemId)
  const {items, restaurantName} = useSelector(
    state => state.cart.selectedItems,
  );
  const [lastOrder, setLastOrder] = useState([]);
  const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);
  const animationProgress = useRef(new Animated.Value(0));
  let animation = useRef();
// 

  useEffect(() => {
    // Animated.timing(animationProgress.current, {
    //   toValue: 1,
    //   duration: 5000,
    //   easing: Easing.linear,
    //   useNativeDriver: false,
    // }).start();
    // animation.current.play();
  }, []);



  const total = items
    ?.map(item => Number(item.price.replace('$', '')))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  });

  useEffect(() => {
    const getDataFromFirebase = async () => {
      const db = getFirestore();
      const docRef = doc(db, 'orders', props.route.params.itemId); // Replace "documentId" with your document's ID
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setLastOrder(docSnap.data().items);
      } else {
        console.log('No such document!');
      }
    };

    getDataFromFirebase();
  }, []);
  return (
    <>
    {lastOrder.length == 0 ? <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <ActivityIndicator size={'large'}/>
    </View>  :  <SafeAreaView style={styles.outerContainer}>
      <View style={{alignItems:'center'}}>
        {/* <Image source={require('../assets/images/checked.png')} style={{width:80, height:80}}/> */}
        <LottieView
        style={styles.checkMark}
        source={require('../assets/animations/checkmark.json')}
        autoPlay
        speed={0.5}
      />
        {/* <AnimatedLottieView
      source={require('../assets/animations/check-mark.json')}
      progress={animationProgress.current}
    /> */}
      </View>
      <Text style={{fontWeight:'900', fontSize:20, alignSelf:'center', color: colors.black}}>
        Your order at {restaurantName} has been placed for {totalUSD}
      </Text>
      <MenuItems foods={lastOrder} hideCheckBox={true} />
      <View style={{}}>
        {/* <Image source={require('../assets/images/cooking.png')} style={{width:100, height:100}}/> */}
      <LottieView
        style={styles.checkMark}
        source={require('../assets/animations/cooking.json')}
        autoPlay
        speed={0.5}
      />
      </View>
    </SafeAreaView>}
   
    </>
    
  );
};

export default OrderCompleted;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  checkMark: {
    width:'100%',
    height: 100,
    alignSelf: 'center',
    marginBottom: 30,
  },
});
