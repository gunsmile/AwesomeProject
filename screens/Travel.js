import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Signup from '../components/Signup';
import Card from '../components/Card';
import Hotel from '../components/Hotel';
import Menu from '../components/Menu';


export default function Travel() {
    return (     
        <ScrollView>   
        <View style={{ flex: 1, paddingTop : 50 }}>
            <Menu/>
            <Signup />
            <Card />
            <Hotel/>
        </View>
        </ScrollView>
    );
}
