import React from "react";
import { View } from "react-native";
import Heartbeat from "../../components/week3/Heartbeat";
import Bmi from "../../components/week3/Bmi";

export default function Health() {
    return (
        <View style={{ flex: 1 , backgroundColor : '#FFF380', justifyContent : "center", padding : 20 }}>
            <Bmi/>
            <Heartbeat/>
        </View>
    );
}
