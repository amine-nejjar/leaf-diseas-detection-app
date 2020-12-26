import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity,Image} from 'react-native'
import CardChoice from '../../shared/cardChoice'
class HomeScreen extends React.Component{
    constructor(){
        super();
    }
  

    render(){
        return (
            <View style={styles.container}>
            <Text>Home Screen</Text>
                <View style={styles.logoContainer}>
                    <Image style={styles.logoStyle} resizeMode='contain' source={require('../../../assets/logo.png')} />
                </View>            
            </View>
            
          );
        }
    }
const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#fff'
    },
    logoStyle:{
        width:'85%',
    },
    logoContainer:{
        justifyContent:'center',
        alignItems:'center'
    },

});
export default HomeScreen