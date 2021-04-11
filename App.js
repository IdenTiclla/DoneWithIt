
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

export default function App() {
    console.log("App executed")
    console.log(Dimensions.get("screen"))
    
    const handlePress = () => console.log("Text pressed")

    return (
        <SafeAreaView style={[styles.container, containerStyle]}>
            <View style={{
                backgroundColor:'dodgerblue',
                width:'50%',
                height:500
            }}>
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
