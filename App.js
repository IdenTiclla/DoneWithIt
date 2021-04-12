
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
            paddingTop: StatusBar.currentHeight,
            flex: 1,
            flexDirection: "row", // horizontal
            justifyContent: "center", // main
            alignItems: "center"
            
        }}>
            <View style={{
                backgroundColor: "dodgerblue",
                width: 100,
                height: 300,
                alignSelf: "flex-start"
            }}>
                <Text>Hello world</Text>
            </View>

            <View style={{
                backgroundColor: "gold",
                width: 100,
                height: 200
            }}>
                <Text>Hello world</Text>
            </View>


            <View style={{
                backgroundColor: "tomato",
                width: 100,
                height: 100
            }}>
                <Text>Hello world</Text>
            </View>

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
