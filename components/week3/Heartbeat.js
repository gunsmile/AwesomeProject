import React, { useState } from "react";
import { View, Button, TextInput, Text, TouchableOpacity } from "react-native";
import {FontAwesome} from "@expo/vector-icons";

export default function Heartbeat() {
    const [count, setCount] = useState(0);
    // console.log("STATE 1 : ", weight, height, bmi, description);

    const onPressButton = () => {
        setCount(count + 1);

    };

    return (
        <View>
            <View style={{flexDirection:"row", padding:10,justifyContent:"space-around"}}>
                <TouchableOpacity onPress={onPressButton}>
                    <FontAwesome name="heart" size={30} color="white" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20}} >{count}</Text>
            </View>
        </View>
    );
}
