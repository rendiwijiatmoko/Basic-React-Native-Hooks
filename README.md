# What is Hooks?
Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

let us take a look how we manage local state of component using **Hooks**.
* Open App.js
* Declaring a state
```js
import React, {useState} from 'react';
...
export default function App() {
    //declaring state using variable like this
    const [count, setCount] = useState(0);
    
    return(
    ...
```
in the above code we should import `useState` from `react`. Notice that we are writing a **functional** component:
`function App()`.
In this App function we declaring variable to catch state: `const [count, setCount] = useState(0);`. The first array `count` which is the current value and the second array `setCount` is function that lets you to update the current value.
* How to setState
```js
...
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
...
```
* This is the result
![alt text](https://github.com/rendiwijiatmoko/Basic-React-Native-Hooks/blob/1.useState/Doc/counter.jpg "Previw Counter")

![alt text](https://github.com/rendiwijiatmoko/Basic-React-Native-Hooks/blob/1.useState/Doc/counter.gif "Previw Counter Gif")