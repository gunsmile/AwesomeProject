import React from "react";
import {  View,  TextInput, Text, Image, Button } from "react-native";

export default function Section8() {
  return (
    <View>
        <View style={{borderTopWidth:0.5,flexDirection:"row", alignContent:"space-between",justifyContent:"space-between",borderColor:"gray"}}>
            <View style={{flexDirection:"column",margin:5,alignContent:"center"}}>
            <Text style={{ fontSize : 14, color : 'black'}}>Price</Text>
            <Text style={{ fontSize : 16, color : '#E5634E'}}>$399.99</Text>
            <Text style={{ fontSize : 14, color : 'black'}}>AVG/Night</Text>
            </View>       
            <View style={{padding:5,justifyContent:"center"}}>
            <Button title="Book Now" color="red" />
            </View>
        </View>
    </View>
  );
}