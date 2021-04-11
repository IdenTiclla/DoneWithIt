
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
        <SafeAreaView style={[styles.container, containerStyle]}>
            <View style={{
                backgroundColor:'dodgerblue',
                width: "100%",
                height: landscape ? "100%" : "30%",
            }}>
                
            </View>
        </SafeAreaView>
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
