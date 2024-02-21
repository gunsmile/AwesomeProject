import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

export default function Section3() {
  return (
    <View >
       <View style={{margin:10,flexDirection : "row"}} >
            <View style={{padding:10,borderWidth : 1, borderColor : '#E5634E', borderRadius : 360, backgroundColor:"#E5634E",justifyContent: 'center', alignContent:"center"}} >
                <Text style={{ fontSize : 16, color : 'white'}}>9.5</Text>
            </View>
            <View style={{margin:5}}>
                <Text style={{ fontSize : 16, color : '#E5634E'}}>Excellent</Text>
                <Text style={{ fontSize : 10, color : 'black'}}>See 801 reviews</Text>
            </View>

       </View>
        </View>

  );
}
 