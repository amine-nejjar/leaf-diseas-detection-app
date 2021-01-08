import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity,Image} from 'react-native'
import CostumPicker from '../../shared/costumPicker'
class HomeScreen extends React.Component{
    constructor(){
        super();
        this.state={
            isVisible1:false,
            isVisible2:false,
            pickedUri:""
        }
    }
    openChose = (chosen) => {
        this.setState({isVisible1:true})
    }
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                        <Text style={styles.title}>Choisir le type que vous voulez analyser</Text>
                </View>
                <TouchableOpacity style={styles.middle}  onPress={()=> this.openChose("papper")}>
                    <Text style={{alignSelf:'center'}}>Clicker pour commencer l'analyse</Text>
                    <View style={styles.row}>
                        <View style={styles.choiceCard}>
                            <Image style={styles.imageStyle} resizeMode='contain' source={require('../../../assets/tomato.png')}/>
                            <Text style={styles.fruiteName}>Tomates</Text>
                            <Text style={styles.featureText}>(Analyses pour virus mosaique, bacterie ...)</Text>
                        </View>
                        <View style={styles.choiceCard}>
                            <Image style={styles.imageStyle} resizeMode='contain' source={require('../../../assets/potato.png')}/>
                            <Text style={styles.fruiteName}>Pommes de terre</Text>
                            <Text style={styles.featureText}>(Analyses les bacteries)</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.choiceCard}>
                            <Image style={styles.imageStyle} resizeMode='contain' source={require('../../../assets/bell-pepper.png')}/>
                            <Text style={styles.fruiteName}>Poivrons</Text>
                            <Text style={styles.featureText}>(Analyses pour virus mosaique, bacterie ...)</Text>
                        </View>
                        <View style={styles.choiceCard}>
                            <Image style={styles.imageStyle} resizeMode='contain' source={require('../../../assets/blueberry.png')}/>
                            <Text style={styles.fruiteName}>Myrtille</Text>
                            <Text style={styles.featureText}>(Analyses pour virus mosaique, bacterie ...)</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.bottom}>

                </View>
                <CostumPicker visible={this.state.isVisible1} close={()=>this.setState({isVisible1:false})}/>
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
    top:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:10
    },
    middle:{
        flex:2,
        backgroundColor:'#fff',
        elevation:4
    },
    bottom:{
        flex:2
    },
    row:{
        flex:1,
        width:"80%",
        flexDirection:'row',
    },
    choiceCard:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        margin:5,
        // backgroundColor:'#fff',
        // elevation:5
    },
    imageStyle:{
        width:"60%",
        height:"30%"
    },
    fruiteName:{
        color:'#0a4f00',
    },
    featureText:{
        fontSize:10,
        textAlign:'center',
        color:'#545556'
    },
    title:{
        fontSize:25,
        textAlign:'center'
    }

});
export default HomeScreen