import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'
import {Input, Divider} from 'react-native-elements'
import CostumButton from '../../shared/button'
import { StackActions } from '@react-navigation/native';

class AuthenticationScreen extends React.Component{
    constructor(){
        super()
        this.state={isLoading:false}
    }
    login = ()=> {
        //replace pour ne pas avoir la possibilité de retourner en arriere depuis la page home
        this.setState({isLoading:true})
        // setTimeout(() =>{
        //     this.setState({isLoading:false});this.props.navigation.dispatch(StackActions.replace('HomeScreen'));}
        //     , 1000);
        setTimeout(() =>{
            this.setState({isLoading:false});this.props.navigation.navigate('HomeScreen');}
            , 1000);
    }
    render(){
        return (
            <View style={styles.container}>
                        <View style={styles.logoContainer}>
                        <Image style={styles.logoStyle} resizeMode='contain' source={require('../../../assets/logo.png')} />
                        </View>
                        <View style={styles.inputsContainer}>
                                <Input placeholder='Email' leftIcon={{ type: 'font-awesome', name: 'envelope',size:20, color:'#00ff94' }}/>
                                <Input placeholder='Mot de passe' secureTextEntry={true} leftIcon={{ type: 'entypo', name: 'lock', size:20, color:'#00ff94' }}/>
                                <CostumButton title='se connecter' action={this.login} loading={this.state.isLoading}/>
                                <Text style={styles.forgotStyle} onPress={()=>console.log("oublier")}>Mot de passe oublié ?</Text>                    
                        </View>
                        <Divider style={styles.divider}/>
                        <View style={styles.footerContainer}>
                            <Text> vous n'avez pas de compte ? <Text onPress={()=>console.log("inscrire")} style={styles.register}>S'INSCRIRE</Text></Text>
                        </View>                     
            </View>
          );
        }
    }
const styles = StyleSheet.create({
    register:{
        color:'#68cbbf',
        fontWeight:'bold'
    },
    forgotStyle:{
        paddingTop:15,
        justifyContent:'center',
    },
    logoStyle:{
        width:'85%',
    },
    logoContainer:{
        flex:3,
        justifyContent:'center',
        alignItems:'center'
    },
    inputsContainer:{
        flex:4,
        alignItems:'center',
        paddingHorizontal:'5%',
        paddingVertical:'10%',
    },
    footerContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    container: {
    flex: 1,
    backgroundColor: '#fff',
    },
    divider:{
        height:2,
        marginHorizontal:'6%',
        color:'#000'
    }
});
export default AuthenticationScreen