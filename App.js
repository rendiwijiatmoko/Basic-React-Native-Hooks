import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
}from 'react-native';

export default function App() {
    const [count, setCount] = useState(0);
    
    return(
        <View style={style.container}>
            <Text style={style.message}>You clicked <Text style={style.highlightText}>{count}</Text> times</Text>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress = {() => setCount(count + 1)} style={[style.button,{backgroundColor:'#3fc1c9'}]}>
                    <Text style={style.textBtn}> Add+ </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress = {() => setCount(count - 1)} style={[style.button,{backgroundColor:'#fc5185'}]}>
                    <Text style={style.textBtn}> Subt- </Text>
                </TouchableOpacity>
            </View>
            
            <View style={style.button}>
            <Text style={{color:'#5f6769'}}>
                to set the count to '0' press <Text onPress={() => setCount(0)} style={{color:'#3fc1c9'}}> Reset </Text>
            </Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    },

    message: {
        fontSize: 20,
        marginBottom: 10,
        color: '#364f6b'
    },

    highlightText:{
        backgroundColor:'#364f6b',
        color:'#fff'
    },

    button: {
        marginHorizontal:5,
        padding:10,
        borderRadius:5
    },

    textBtn: {
        color: '#fff'
    }
})