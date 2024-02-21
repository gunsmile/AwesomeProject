import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

export default function Section2() {
  return (
    <View style={{marginTop:-50}}>
    <View style={{ margin : 5 , padding : 10, borderRadius : 10, backgroundColor:"#f5f5f5",shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.8, shadowRadius: 2, elevation: 5}}>
        <View style={{ flex : 1 , marginTop : 3}}>
            <View style={{ flexDirection : "row" , justifyContent:"center"}}>    
                <Text style={{ fontSize : 18, color : 'black'}}>Hilton San Francisco</Text>
            </View>
         <View style={{ flexDirection : "row" , justifyContent:"center"}}> 
            <FontAwesome name="star" size={12} color="orange" />
            <FontAwesome name="star" size={12} color="orange" />
            <FontAwesome name="star" size={12} color="orange" />
            <FontAwesome name="star" size={12} color="orange" />
            <FontAwesome name="star-half" size={12} color="orange" />
         </View>
        <View style={{ flexDirection : "row", justifyContent: 'center'}}>
            <Text style={{ fontSize : 13 , color : 'black',textAlign:'center'}}>Facilities provided may range from a modest quality mattress in a small room to large suites.</Text>
        </View>
        </View>
        </View>
        </View>

  );
}
 