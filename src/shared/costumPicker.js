import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity,Image} from 'react-native'
import {Overlay,Button, Icon} from 'react-native-elements'
import * as ImagePicker from 'expo-image-picker';

class CostumPicker extends React.Component{
    constructor(){
        super();
        this.state={
            isVisible1:false,
            isVisible2:false,
            pickedUri:"",
            isLoading:false
        }
    }
    openCameraAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Permission to use camera is required!");
          return;
        }
    
        let pickerResult = await ImagePicker.launchCameraAsync();
        if (pickerResult.cancelled === true) {
            return;
          }
        this.setState({isVisible2:true,pickedUri:pickerResult.uri})
    }
    openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (pickerResult.cancelled === true) {
            return;
          }
          this.setState({isVisible2:true,pickedUri:pickerResult.uri})
    }
    Analyse = () => {
        this.setState({isLoading:true})
        setTimeout(() =>{
            this.setState({isLoading:false,isVisible2:false});this.props.close()}
            , 2000)
    }
    render(){
        return(
            <View>
            <Overlay overlayStyle={{paddingVertical:10}} isVisible={this.props.visible}>
                <View style={{backgroundColor:'#fff',marginHorizontal:20,alignItems:'center',flexDirection:'column', paddingVertical:15}}>
                    <Button containerStyle={{width:"100%", marginBottom:15}} titleStyle={{fontSize:13,marginLeft:7}} title="choisir une photo" icon={<Icon color="#fff" size={18} name="photograph" type="fontisto"/>} onPress={()=> {this.openImagePickerAsync()}}/>
                    <Button containerStyle={{width:"100%",marginBottom:15}} titleStyle={{fontSize:13,marginLeft:7}} icon={<Icon color="#fff" size={18} name="camera" type="fontisto"/>}   title="prendre une photo" onPress={()=> {this.openCameraAsync()}}/>
                    <Button buttonStyle={{backgroundColor:"#D43"}} onPress={this.props.close} containerStyle={{width:"100%", marginBottom:15}} titleStyle={{fontSize:13}} title="annuler"/>
                </View>   
            </Overlay>
            <Overlay isVisible={this.state.isVisible2} overlayStyle={{width:"80%"}}>
                <View style={{alignItems:'center'}}>
                    <Image source={{uri:this.state.pickedUri}} style={{height:300,width:180,borderWidth:5,marginBottom:10,borderColor:'#00c7ff'}}/>
                    <Button loading={this.state.isLoading} titleStyle={{fontSize:12}} title="Analyser la photo" containerStyle={{marginTop:6}} onPress={()=>this.Analyse()}/>
                    <View>
                        <Text style={{fontWeight:'bold'}}>Results will show here ...</Text>
                    </View>
                </View>
            </Overlay>               
            </View>
 
        )
    }
}

export default CostumPicker