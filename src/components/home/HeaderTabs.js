import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import colors from '../../utils/colors';

const HeaderTabs = (props) => {
  return (
    <View style={styles.headerTabsContainer}>
      <HeaderButton
        text="Delivery"
        btnColor={colors.black}
        textColor="white"
        activeTab={props?.activeTab}
        setActiveTab={props?.setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        btnColor={colors.white}
        textColor="black"
        activeTab={props?.activeTab}
        setActiveTab={props?.setActiveTab}
      />
    </View>
  );
};

const HeaderButton = props => {
  return (
    <TouchableOpacity
    onPress={()=>props?.setActiveTab(props.text)}
      style={[styles.headerButtonContainer, {backgroundColor: props?.activeTab === props?.text ? 'black' : 'white'}]}>
      <Text style={[styles.headerButtonText, {color: props?.activeTab === props?.text ? 'white' : 'black'}]}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default HeaderTabs;

const styles = StyleSheet.create({
  headerTabsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  headerButtonContainer: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
  headerButtonText: {
    fontSize: 15,
    fontWeight: '900',
  },
});
