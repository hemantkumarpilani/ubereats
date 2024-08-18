import {ActivityIndicator, Modal, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale, scale} from 'react-native-size-matters';
import LottieView from 'lottie-react-native';

const Loader = ({visible}) => {
  return (
    <Modal transparent visible={visible}>
      <View style={styles.innerContainer}>
        <View style={styles.activityIndicatorContainer}>
          {/* <ActivityIndicator size={'large'} /> */}
          <LottieView
            style={{width:'100%', height:'100%'}}
            source={require('../assets/animations/scanner.json')}
            autoPlay
            speed={0.5}
          />
        </View>
      </View>
    </Modal>
  );
};

export default Loader;

const styles = StyleSheet.create({
  modalConatiner: {
    flex: 1,
  },
  innerContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  activityIndicatorContainer: {
    width: scale(200),
    height: scale(200),
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
