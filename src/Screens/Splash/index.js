import {View, Text} from 'react-native'
import React ,{useEffect}from 'react'


export default function SplashScreen({navigation}){

    useEffect(() =>{
        setTimeout(() =>{
           navigation.replace("GetStartedScreen");
        }, 9000);
    },[]);


    return(
        <View 
            style={{
                flex : 1, 
                backgroundColor: 'black', 
                justifyContent: "center", 
                alignItems:"center"
                }}>
        <Text style={{color: '#B2BABB', fontSize: 60, fontWeight: '600'}}>
        eZpedal
        </Text>
        </View>

    );
}