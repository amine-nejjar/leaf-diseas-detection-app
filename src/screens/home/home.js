import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity,Image} from 'react-native'
class HomeScreen extends React.Component{
    constructor(){
        super();
    }
  

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                </View>
                <View style={styles.middle}>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.choiceCard}>
                            <Image style={styles.imageStyle} resizeMode='contain' source={require('../../../assets/tomato.png')}/>
                            <Text style={styles.fruiteName}>Tomates</Text>
                            <Text style={styles.featureText}>(Analyses pour virus mosaique, bacterie ...)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.choiceCard}>
                            <Image style={styles.imageStyle} resizeMode='contain' source={require('../../../assets/potato.png')}/>
                            <Text style={styles.fruiteName}>Pommes de terre</Text>
                            <Text style={styles.featureText}>(Analyses les bacteries)</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.choiceCard}>
                            <Image style={styles.imageStyle} resizeMode='contain' source={require('../../../assets/bell-pepper.png')}/>
                            <Text style={styles.fruiteName}>Poivrons</Text>
                            <Text style={styles.featureText}>(Analyses pour virus mosaique, bacterie ...)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.choiceCard}>
                            <Image style={styles.imageStyle} resizeMode='contain' source={require('../../../assets/blueberry.png')}/>
                            <Text style={styles.fruiteName}>Myrtille</Text>
                            <Text style={styles.featureText}>(Analyses pour virus mosaique, bacterie ...)</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.bottom}>

                </View>
                
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
        flex:1,
    },
    middle:{
        flex:3,
    },
    bottom:{
        flex:2
    },
    row:{
        flex:1,
        width:"97%",
        flexDirection:'row',
    },
    choiceCard:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        margin:5,
        backgroundColor:'#fff',
        elevation:5
    },
    imageStyle:{
        width:"90%",
        height:"35%"
    },
    fruiteName:{
        color:'#0a4f00',
    },
    featureText:{
        fontSize:10,
        textAlign:'center',
        color:'#545556'
    }

});
export default HomeScreen