import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

class RegisterScreen extends React.Component{
    render(){
        return (
            <View style={styles.container}>
              <Text>Creation du compte</Text>
            </View>
          );
        }
    }
const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
});
export default RegisterScreen