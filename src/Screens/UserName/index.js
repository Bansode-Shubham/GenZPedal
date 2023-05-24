import {View, Text ,TextInput, TouchableOpacity,StyleSheet, Image} from 'react-native';
import React, {useState}from 'react';
import SafeAreaComp from '../../components/SafeAreaComp';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { SafeAreaView } from 'react-native-safe-area-context';
import { launchCamera } from 'react-native-image-picker';



export default function UserNameScreen({navigation}){
    const [nextStyle, setNextStyle]=useState({
        backgroundColor:'#E5E7E9',
        color:'black',
        });


    return(

        <SafeAreaComp>
       
        
            <View style={{flex: 1, padding: 15, backgroundColor: 'white'}}>
            <Text
                style={{
                    fontSize: 20,
                    color: 'black',

                }}>
                 What's your name?   
                </Text>
                <Text
                style={{
                    color: 'black',
                    marginTop: 3,

                }}>
                Let us know how to properly address you
                </Text>
                <View
                    style={{
                        backgroundColor:'#E5E7E9',
                        marginTop: 20,
                        paddingHorizontal: 10,
                        borderRadius: 5,

                    }}>
                    <TextInput placeholder="name"/>
                </View>
                <View
                    style={{
                        backgroundColor:'#E5E7E9',
                        marginTop: 10,
                        paddingHorizontal: 10,
                        borderRadius: 5,

                    }}>
                    <TextInput placeholder="Please enter surname"/>
                </View>
       <View style={{flex: 1, justifyContent: 'flex-end'}}>
           <View style={{justifyContent:'space-between', flexDirection:'row'}}>
             <View 
              style={{
              flexDirection:'row',
               alignItems:'center', 
               backgroundColor:'#E5E7E9',
               paddingVertical: 10,
               paddingHorizontal: 15,
               color:'black',
               borderRadius: 20
              }}>
              <Text 
               style={{
               color:'black',
              }}>
              <AntDesign name='arrowleft'/>
             </Text>
          </View>
          
          
            <TouchableOpacity onPress={() => navigation.navigate('PrivacyPolicyScreen')} >
            <View 
                style={{
                flexDirection:"row",
                backgroundColor:nextStyle.backgroundColor,
                paddingVertical: 10,
                paddingHorizontal:15,
                color: 'black',
                borderRadius: 20,
                alignItems:'center',

                }}>
             <Text style={{
              color: nextStyle.color
             }}>Next</Text>
              <Text 
               style={{
               color:'black',
               marginLeftt: 10,

              }}>
              <AntDesign name='arrowright' color={nextStyle.color}/>
             </Text>
             </View>
            </TouchableOpacity>
              </View>
           </View>
            </View>
        </SafeAreaComp>
    
    

        
    );
            
            
    
}

