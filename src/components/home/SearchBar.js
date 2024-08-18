import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import colors from '../../utils/colors'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const SearchBar = ({cityHandler}) => {
  return (
    <View style={styles.outerContainer}>
        <GooglePlacesAutocomplete
        query={{key : 'AIzaSyA8xl1_5lQAHaBF_y2MyUSxYYv3Bpbtitw'}}
        onPress={(data, details = null)=>{
            console.log(data.description)
            const city = data.description.split(',')[0]
            cityHandler(city)
        }}
        placeholder='Search'
        styles={{
            textInput : styles.textInput,
            textInputContainer:styles.textInputContainer
        }}
        renderLeftButton={()=>(
            <View style={styles.leftButtonContainer}>
                <Ionicons name='location-sharp' size={24} color={colors.black}/>
            </View>
        )}
        renderRightButton={()=>(
            <View style={styles.rightButtonContainer}>
                <AntDesign name='clockcircle' size={11} style={{marginRight:6, color:colors.black}}/>
                <Text>Search</Text>
            </View>
        )}
        />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    outerContainer :{
        marginTop:15,
        flexDirection:'row',
    },
    textInput :{
        backgroundColor:colors.grey,
        borderRadius:20,
        fontWeight:'700',
        marginTop:7
    },
    textInputContainer :{
        backgroundColor:colors.grey,
        borderRadius:50,
        flexDirection:'row',
        alignItems:'center',
        marginRight:10
    },
    leftButtonContainer :{
        marginLeft:10
    },
    rightButtonContainer :{
        flexDirection:'row',
        marginRight:8,
        backgroundColor:colors.white,
        padding:9,
        borderRadius:30,
        alignItems:'center'
    }
})