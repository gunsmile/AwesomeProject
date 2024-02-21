import React from 'react';
import { Image, View } from 'react-native';

export default function Section1() {
  return (
    <View style={{ flex : 1 , flexDirection : 'row' }}>    
      <Image style={{ flex : 1, resizeMode : "cover", aspectRatio : 3/1 }} source={require("../../assets/room-6.jpg")} />      
    </View>
  );
}
   