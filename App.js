
import React from 'react';

import { 
    Dimensions,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    TouchableHighlight,
    Button,
    StatusBar,
    Alert, 
    Platform 
} from 'react-native';

import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'

export default function App() {
    console.log(useDeviceOrientation())

    const orientation = useDeviceOrientation()
    const { landscape, portrait } = useDeviceOrientation()

    console.log(landscape, portrait)

    
    const handlePress = () => console.log("Text pressed")

    return (
        <View style={{
            backgroundColor: "dodgerblue",
            flex: 1
        }}>
            <View style={{
                backgroundColor: "dodgerblue",
                flex:1,
            }}/>

            <View style={{
                backgroundColor: "gold",
                flex:1,
            }}/>


            <View style={{
                backgroundColor: "tomato",
                flex:1,
            }}/>

        </View>
    );
}

const containerStyle = { backgroundColor: "orange"}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
});
