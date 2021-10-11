import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function App() {




  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Blobs app!</Text>

      <TouchableOpacity style={{alignSelf:'center'}} onPress={()=>{
        
          //create a blob
          const obj = {hello:'world'};
          const blob = new Blob([obj], {type : 'application/json'});
          console.log(blob); //even though react native gets an error, in web console the blob prints, to print on react native console, stringify it to know it's there
          console.log(JSON.stringify(blob));

          //create the file reader
          let reader = new FileReader();
          
          //execute reader method to start reading
          reader.readAsDataURL(blob);

          //executes after reading is complete
          reader.onloadend = ()=>{
            let base64String = reader.result;
            console.log(base64String);
          }
      }}>
          <Text style={{padding:20, backgroundColor:'orange'}}> convert blob</Text>
      </TouchableOpacity>

    </View>
  );
}


