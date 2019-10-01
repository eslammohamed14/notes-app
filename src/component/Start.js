/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, StatusBar} from 'react-native';
import {Actions} from 'react-native-router-flux';
import IconEnt from 'react-native-vector-icons/Entypo';
import Image1 from './image.png';


export default class Start extends Component {
    render() {
    return (
      <View style={styles.container}>
          <Image source= {Image1} style={styles.img} />
        <StatusBar backgroundColor= "#0071CD" barStyle="light-content" />
          <TouchableOpacity
          style={styles.start}
          title = "Start"
          onPress= {()=> Actions.Login() }
         >
             <IconEnt name="home" size={50} style= {styles.icon} />
            <Text style={styles.textBotton}>Start</Text>
          </TouchableOpacity>
      </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#007EE5',
        justifyContent: 'flex-start',
        alignItems: 'center',
        textAlign: 'center'
    },
    img: {
        width:'100%',
        height:'100%',
        position : 'absolute',
        
    },
    start: {
        backgroundColor: 'white',
        marginTop:300,
        paddingTop:15,
        paddingBottom:15,
        paddingLeft:60, 
        paddingRight:80,
        borderRadius:50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

    },
    textBotton: {
        fontSize:50,
        fontWeight: 'bold',
        color: 'black',

    },
    icon: {
         
        alignItems: 'flex-start',
        paddingRight:15,
        //paddingLeft: 5,
    },
});

