import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

export default function Section4() {
  return (
    <View style={{margin:5,padding: 8, borderTopWidth:0.5, borderBottomWidth:0.5,borderColor:"gray"}}>
         <Text style={{ fontSize : 14, color : 'black'}}>Hotel Description</Text>
         <Text style={{ fontSize : 12, color : 'black'}}>218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore</Text>
    </View>

  );
}