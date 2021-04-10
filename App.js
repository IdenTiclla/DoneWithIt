import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableHighlight, Button } from 'react-native';

export default function App() {
    console.log("App executed")
    
    const handlePress = () => console.log("Text pressed")

    return (
        <View style={styles.container}>
            <Text numberOfLines={3} onPress={handlePress}>Hello React Native A really long text. NOw i wanna make this even more more long text</Text>
            <Button color="orange" title="click me" onPress={()=> console.log("button clicked")}></Button>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
