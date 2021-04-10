import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableHighlight, Button, Alert } from 'react-native';

export default function App() {
    console.log("App executed")
    
    const handlePress = () => console.log("Text pressed")

    return (
        <View style={[styles.container, containerStyle]}>
            <Text numberOfLines={3} onPress={handlePress}>Hello React Native A really long text. NOw i wanna make this even more more long text</Text>
            <Button color="orange" title="click me" onPress={()=> console.log("button clicked")}></Button>
            <Button 
                color="blue" 
                title="click me" 
                onPress={()=> Alert.alert("My title", "My Message",[
                    {text:"YEES!", onPress: () => console.log("clickeaste yeees")},
                    {text:"NOOO!", onPress: () => console.log("clickeaste nooo")},
                ])}></Button>

            <Button 
                color="red" 
                title="click me prompt" 
                onPress={()=> Alert.prompt("My Title", "my message", (text) => console.log(text))}></Button>
            <StatusBar style="auto" />
        </View>
    );
}

const containerStyle = { backgroundColor: "orange"}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
