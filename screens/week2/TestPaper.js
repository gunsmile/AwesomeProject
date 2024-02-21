import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Image, ScrollView, View } from "react-native";
import { Avatar, Button, Card, Divider, Icon, Text } from "react-native-paper";

export default function TestPaper() {
  return (
    <ScrollView style={{ paddingVertical: 25, flex: 1 }}>
      <Card>
        <Card.Cover style={{ borderRadius :0 }} source={require('../../assets/room-6.jpg')} />
      </Card>
      <Card style={{marginTop:-20, marginHorizontal:10}}>
        <Card.Content>
        <Text style={{ textAlign: 'center' }} variant="titleMedium">Hilton San Francisco</Text>
        <View style={{ flexDirection : "row" , justifyContent:"center", }}> 
            <FontAwesome name="star" size={14} color="orange" />
            <FontAwesome name="star" size={14} color="orange" />
            <FontAwesome name="star" size={14} color="orange" />
            <FontAwesome name="star" size={14} color="orange" />
            <FontAwesome name="star-half" size={12} color="orange"/>
         </View>
            <Text style={{ textAlign: 'center' }} variant="bodySmall" >Facilities provided may range from a modest quality mattress in a small room to large suites</Text>
        </Card.Content>
      </Card>
        <View style={{marginVertical:20,flexDirection : "row",paddingLeft: 15}} >
            <View style={{padding:10,borderWidth : 1, borderColor : '#E5634E', borderRadius : 360, backgroundColor:"#E5634E",justifyContent: 'center', alignContent:"center"}} >
                <Text style={{ fontSize : 16, color : 'white'}}>9.5</Text>
            </View>
            <View style={{margin:5}}>
                <Text style={{ fontSize : 16, color : '#E5634E'}}>Excellent</Text>
                <Text style={{ fontSize : 10, color : 'black'}}>See 801 reviews</Text>
            </View>
          </View>
      <Text style={{paddingLeft:15}}variant="titleMedium">Hotel Decription</Text>
      <Text style={{paddingLeft:15}}variant="bodySmall">218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore</Text>
      <View style={{ flexDirection : "row",justifyContent:"space-around",marginHorizontal:10,marginTop:20}}>
      <Icon source="wifi"color={"#5295A8"} size={22}/>
      <Icon source="coffee"color={"#5295A8"} size={22}/>
      <Icon source="shower"color={"#5295A8"} size={22}/>
      <Icon source="car"color={"#5295A8"} size={22}/>
      <Icon source="paw"color={"#5295A8"} size={22}/>
      </View>
      <View style={{ flexDirection : "row",justifyContent:"space-around",marginHorizontal:10,marginTop:3}}>
      <Text variant="bodySmall">wifi</Text>
      <Text variant="bodySmall">coffee</Text>
      <Text variant="bodySmall">shower</Text>
      <Text variant="bodySmall">car</Text>
      <Text variant="bodySmall">paw</Text>
      </View>
      <Text style={{paddingLeft:15,marginTop:15}}variant="titleMedium">Location</Text>
      <Text style={{paddingLeft:15}}variant="bodySmall">218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore...</Text>
      <Card style={{marginHorizontal:15,marginTop:10}}>
    <Card.Cover source={require('../../assets/trip-2.jpg')} />
    </Card>
    <Text style={{paddingLeft:15,marginTop:15}}variant="titleMedium">Room Type</Text>
    <View style={{ flexDirection : "row"}}>
    <Card style={{marginHorizontal:15,marginTop:5}}>
    <Card.Cover style={{width:80,height:100}}source={require('../../assets/room-8.jpg')} />
    </Card>
    <View style={{flexDirection:"column", justifyContent:"center"}}>
    <Text style={{paddingLeft:15}}variant="titleSmall">Standard Twin Room</Text>
    <Text style={{paddingLeft:15,marginTop:15,color : '#E5634E'}}variant="titleMedium">$399.99</Text>
    <Text style={{paddingLeft:15,color : 'blue'}}variant="bodySmall">Hurry Up! This is your last room!</Text>
    </View>
    </View>
    <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:10, marginBottom:10}}>
    <View>
      <Text style={{paddingLeft:15,marginTop:15}}variant="titleSmall">Price</Text>
    <Text style={{paddingLeft:15,color : '#E5634E'}}variant="titleMedium">$399.99</Text>
    <Text style={{paddingLeft:15}}variant="bodySmall">AVG/Night</Text>
    </View>
    <Card.Actions>
    <Button
        style={{ backgroundColor: '#E5634E',borderColor:"#E5634E",textAlign:"center" }}
        labelStyle={{ color: '#ffffff' }}
        >
        Book Now
    </Button>
    </Card.Actions>
    </View>
  <Divider style={{ marginVertical : 10 }} />

      
    </ScrollView>
  );
}
