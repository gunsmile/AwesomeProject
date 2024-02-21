import React from "react";
import {  View,  TextInput, Text, Image } from "react-native";

export default function Section7() {
  return (
    <View style={{margin:10}}>
        <View>
        <Text style={{ fontSize : 16, color : 'black'}}>Room Type</Text>
        </View>
        <View style={{flexDirection:"row",paddingTop:3}}>
        <Image style={{width:60,height:70,borderRadius : 8}} source={require("../../assets/room-8.jpg")} />
        <View style={{paddingLeft:10}}>
        <Text style={{ fontSize : 14, color : 'black'}}>Standard Twin Room</Text>
        <Text style={{ fontSize : 14, color : '#E5634E'}}>$399.99</Text>
        <Text style={{ fontSize : 14, color : '#87A8AD'}}>Hurry Up! This is your last room!</Text>
        </View>
        </View>
    </View>
  );
}