import React from "react";
import {  View,  TextInput, Text, Image } from "react-native";

export default function Section6() {
  return (
    <View style={{flexDirection : "column",borderBottomWidth:0.5,padding:12,borderColor:"gray"}}>
        <Text style={{ fontSize : 14, color : 'black'}}>Hotel Description</Text>
        <Text style={{ fontSize : 10, color : 'black'}}>218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et…</Text>
        <Image source={require("../../assets/map.jpg")} />
    </View>
  );
}