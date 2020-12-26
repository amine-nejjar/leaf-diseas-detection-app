import React from 'react'
import {Text,TouchableOpacity, Image, StyleSheet,View} from 'react-native'
export default function CardChoice(props){
    return(
        <TouchableOpacity style={{width:"100%"}}>
            <View>
                <Image resizeMode='contain' source={require('../../assets/tomato.png')}/>
                <Text>Tomato</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    main_container:{
        
    }
})