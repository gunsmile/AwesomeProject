import React, { useState } from "react";
import { View, Button, TextInput, Text, TouchableOpacity } from "react-native";
import {FontAwesome} from "@expo/vector-icons";

export default function Bmi() {
    const [weight , setWeight] = useState('70');
    const [height , setHeight] = useState('170');
    const [bmi , setBmi] = useState('0');
    const [description, setDescription] = useState('');    
    console.log("STATE 1 : ", weight, height, bmi, description);
    const onPressButton = () => {
        console.log("Calculate button is pressed!!!");
        let output = (weight/ (height/100 * height/100));
        
        
        let description;
        if (output < 18.5) {
            description = "Underweight - eat a bagel!";
        } 
        else if (output >= 18.5 && output <= 24.99) {
            description = "Normal - keep it up!";
        } 
        else if (output >= 25 && output <= 29.99) {
            description = "Overweight - exercise more!";
        } 
        else if (output >= 30 && output <= 39.99) {
            description = "Obese - get off the couch!";
        } 
        else {
            description = "Morbidly Obese - take action!";
        }

        setBmi(output.toFixed(2));
        setDescription(description);
    };

    return (
        <View>
            <View style={{backgroundColor:"white", padding:10, marginVertical:10, borderRadius:10, height:100, justifyContent:"space-around"}}>
                <Text style={{fontSize:20,textAlign:"center"}}>Weight(kg.)</Text>
                <TextInput 
                    style={{fontSize:20,textAlign:"center"}} 
                    keyboardType="nameric" 
                    placeholder="Input your Weight..."
                    value={weight}
                    onChangeText={ (newWeight) => setWeight(newWeight) }
                />
            </View>
            <View style={{backgroundColor:"white", padding:10, marginVertical:10, borderRadius:10, height:100, justifyContent:"space-around"}}>
                <Text style={{fontSize:20, textAlign:"center"}}>Height(m.)</Text>
                <TextInput 
                    style={{fontSize:20,textAlign:"center"}}
                    keyboardType="nameric" 
                    placeholder="Input your Height..."
                    value={height}
                    onChangeText={ (newHeight) => setHeight(newHeight) }
                />
            </View>
            <View style={{flexDirection:"row", marginVertical:10,alignItems:"center"}}>
                <View style={{flex :1, backgroundColor:"white", marginRight:10, height:80, justifyContent:"center", alignItems:"center",borderRadius:20}}>
                    <Text style={{fontSize:20}}>Bmi : {bmi}</Text>
                </View>
                <View style={{flex :1, backgroundColor:"white", marginRight:10, height:80, justifyContent:"center", alignItems:"center",borderRadius:20}}>
                    <Text style={{fontSize:14, color:"red"}}>{description}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={onPressButton}>
                <View style={{ marginVertical:20,padding: 20, backgroundColor: "#FBB117", borderRadius: 40}}>
                        <Text style={{ fontSize: 20, textAlign: "center", color: 'white' }}>
                        Calculate
                </Text>
                </View>
            </TouchableOpacity>
            {/* <View style={{flexDirection:"row", padding:10,justifyContent:"space-around"}}>
                <TouchableOpacity onPress={onPressButton}>
                    <FontAwesome name="heart" size={30} color="red" />
                </TouchableOpacity>
                <Text>{count}</Text>

            </View> */}

        </View>
    );
}
