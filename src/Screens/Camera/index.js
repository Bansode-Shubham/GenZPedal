import {View, Text, Button} from 'react-native'
import React from 'react';
import DocumentPicker from 'react-native-document-picker';

export default function CameraScreen(){

    const selectDoc = async() =>{
        const doc = await DocumentPicker.pick();
        try{
            const doc= await DocumentPicker.pick({
                type:[DocumentPicker.types.allFiles],
               allowMultiSelection: true 

            });
            console.log(doc)
        }catch(err){
            if(DocumentPicker.isCancel(err))
            console.log("user cancelled the upload", err);
            else
                console.log(err)
            
        }

    }
    return(
        <View>

            <Text style={{color: 'black', fontSize: 30,
            textAlign:'center', marginVertical: 40}}
            >Upload All Document's Here </Text>
            <Text style={{color: 'black', fontSize: 28,
            textAlign:'center', marginVertical: 40}}
            >Upload AdharCard</Text>
            <View style={{marginHorizontal: 40, paddingBottom: 40}}>
                <Button title="Select Document" onPress={selectDoc}/>
            </View>
            <Text style={{color: 'black', fontSize: 28,
            textAlign:'center', marginVertical: 40}}
            >Upload Licene</Text>
            <View style={{marginHorizontal: 40, paddingBottom: 40 }}>
                <Button title="Select Document" onPress={selectDoc}/>
            </View>
            <Text style={{color: 'black', fontSize: 28,
            textAlign:'center', marginVertical: 40,}}
            >Upload Pancard</Text>
            <View style={{marginHorizontal: 40, paddingBottom: 40}}>
                <Button title="Select Document" onPress={selectDoc}/>
            </View>
        </View>
       
    );
}
