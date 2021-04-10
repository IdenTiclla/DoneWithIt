import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableHighlight } from 'react-native';

export default function App() {
    console.log("App executed")
    
    const handlePress = () => console.log("Text pressed")

    return (
        <View style={styles.container}>
            <Text numberOfLines={3} onPress={handlePress}>Hello React Native A really long text. NOw i wanna make this even more more long text</Text>
            <TouchableHighlight onPress={() => console.log("image tapped")}>
                <Image fadeDuration={1000} blurRadius={2} source={{width:200, height:300, uri: "https://picsum.photos/200/300"}}/>
            </TouchableHighlight>
            
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
