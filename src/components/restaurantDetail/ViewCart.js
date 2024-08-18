import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import colors from '../../utils/colors';
import {useSelector} from 'react-redux';
import OrderItems from './OrderItems';
import firebase from '../../firebase/firebase';
import {
  app,
  db,
  getFirestore,
  collection,
  addDoc,
} from '../../firebase/firebase';
import {serverTimestamp} from 'firebase/firestore';
import LottieView from 'lottie-react-native';
import Loader from '../Loader';

const ViewCart = ({navigation}) => {
  let itemsId;
  const [modalVisible, setModalVisible] = useState(false);
  const {items, restaurantName} = useSelector(
    state => state.cart.selectedItems,
  );
  const [loading, setLoading] = useState(false);

  const total = items
    ?.map(item => Number(item.price.replace('$', '')))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  });

  const addOrderToFirebase = async () => {
    setLoading(true);
    // const db = firebase.firestore()
    // db.collection('orders').add({
    //   items : items,
    //   restaurantName : restaurantName,
    //   createdAt : firebase.firestore.FieldValue.serverTimestamp()
    // })

    const docRef = await addDoc(collection(db, 'orders'), {
      items: items,
      restaurantName: restaurantName,
      createdAt: serverTimestamp(),
    }).then(docRef => {
      setTimeout(() => {
        console.log('docRef', docRef.id);
        setLoading(false);
        navigation.navigate('OrderCompleted', {itemId: docRef.id});
        setModalVisible(false);
      }, 2500);
    });
  };

  const checkoutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
            {items?.map((item, index) => (
              <OrderItems key={index} item={item} />
            ))}
            <View style={styles.subTotalContainer}>
              <Text style={styles.subTotalText}>Subtotal</Text>
              <Text>{totalUSD}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  backgroundColor: colors.black,
                  alignItems: 'center',
                  padding: 13,
                  borderRadius: 30,
                  width: 300,
                  position: 'relative',
                }}
                onPress={() => {
                  addOrderToFirebase();
                }}>
                <Text style={{color: colors.white, fontSize: 20}}>
                  Checkout
                </Text>
                <Text
                  style={{
                    position: 'absolute',
                    right: 20,
                    color: colors.white,
                    fontSize: 15,
                    top: 17,
                  }}>
                  {total ? totalUSD : ''}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };
  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
        {checkoutModalContent()}
      </Modal>
      {total ? (
        <View style={styles.outerContainer}>
          <View style={styles.innerContainer}>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => {
                setModalVisible(true);
              }}>
              <Text style={styles.viewCartText}>View Cart {totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
      {loading ? (
        // <View
        //   style={{
        //     borderWidth:1,
        //     backgroundColor:'red',
        //     flex: 1,
        //     // justifyContent: 'center',
        //     // alignItems: 'center',
        //     opacity: 0.6,
        //   }}>
            // {console.log('loading', loading)}
          //   <View style={{backgroundColor:'red'}}>
          //     <Text>wfsfhkfhakfhak</Text>
          //     <LottieView
          //   style={{backgroundColor:'red', padding:50}}
          //   source={require('../../assets/animations/scanner.json')}
          //   autoPlay
          //   speed={0.5}
          // />
          //   </View>
         
        // </View>
        <Loader visible={loading}/>
      ) : null}
    </>
  );
};

export default ViewCart;

const styles = StyleSheet.create({
  outerContainer: {
    justifyContent: 'center',
    bottom: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
  },
  buttonContainer: {
    backgroundColor: colors.black,
    alignItems: 'center',
    padding: 13,
    borderRadius: 30,
    width: 300,
  },
  viewCartText: {
    color: colors.white,
    fontSize: 20,
  },
  checkoutText: {
    color: colors.white,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalCheckoutContainer: {
    backgroundColor: colors.white,
    padding: 16,
    height: 500,
    borderWidth: 1,
  },
  restaurantName: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 10,
  },
  subTotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  subTotalText: {
    textAlign: 'left',
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 10,
  },
});
