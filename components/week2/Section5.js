import React from "react";
import {  View,  TextInput } from "react-native";
import MyIcon from "./MyIcon"

export default function Section5() {
  return (
    <View style={{borderBottomWidth:0.5,borderColor:"gray"}}>
      <View style={{ flexDirection : "row", marginTop : 10  }}>
        <MyIcon title="wifi" name="wifi" size={30} color="#5295A8" />
        <MyIcon title="Coffee" name="coffee" size={30} color="#5295A8" />
        <MyIcon title="bath" name="bath" size={30} color="#5295A8" />
        <MyIcon title="car" name="car" size={30} color="#5295A8" />
        <MyIcon title="paw" name="paw" size={30} color="#5295A8" />
      </View>
    </View>
  );
}