import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
class HomeScreen extends React.Component{
    constructor(){
        super();
    }
  

    render(){
        return (
            <View style={styles.container}>
            <Text>Home Screen</Text>
            </View>
            
          );
        }
    }
const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
    },

});
export default HomeScreen