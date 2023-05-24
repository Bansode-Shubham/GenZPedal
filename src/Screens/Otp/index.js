import {View, Text, Image, TouchableOpacity} from 'react-native'
import React,{useState}from 'react'
import SafeAreaComp from '../../components/SafeAreaComp'
import {OTP_COUNTRY_LIST} from '../../constants/AppLocalData';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TextInput } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
export default function OtpScreen({navigation}){

    const [selectedCountry, setSelectedCountry]= useState(OTP_COUNTRY_LIST[0]);
    const [showListCountry, setShowListCountry]= useState(false);
    const ORView =() =>{
        return (
            <View 
                style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    alignItems:'center',
                    marginBottom: 10
                }}>
            <View style={{flex: 0.4, backgroundColor:'#b8b8b8', height: 1}}></View>
            <View style={{flex: 0.2, alignItems:'center'}}>
                <Text>Or</Text>
            </View>
            <View style={{flex: 0.4, backgroundColor:"#b8b8b8", height: 1}}></View>
            </View>
        )

    }

    return (
       <SafeAreaComp>
       <View style={{flex: 1, padding: 15}}>
       <Text style={{fontSize: 20}}>Enter Your Mobile Number </Text>
       <View style ={{flexDirection:"row",marginTop: 10}}>
        <TouchableWithoutFeedback onPress={() => setShowListCountry(!showListCountry)}>  
        <View 
            style={{
                backgroundColor: '#E5E7E9', 
                paddingVertical: 7, 
                flexDirection:'row',
                borderRadius: 5,
                flex: 0.2,
                paddingLeft: 10
                }}>
            <Image 
                style={{width: 40, height: 40, marginRight: 15}}
                source={selectedCountry.image}    
                />
                 <Text>
                    <FontAwesome5 name='sort-down' size={20} />
                 </Text>      
            </View>
            </TouchableWithoutFeedback>
            <View 
                style={{
                    flexDirection:'row',
                    paddingVertical: 7,
                    alignItems:'center',
                    marginLeft: 15,
                    backgroundColor: '#eeeeee',
                    flex: 0.8,
                    borderRadius: 5,
                    paddingHorizontal: 10,
                    }}>
                <Text style={{marginRight: 10}}>{selectedCountry.code}</Text>
                <TextInput placeholder="9615550123"/>
            </View>
         </View> 
        {showListCountry ? <View 
            style={{
                marginTop: 10,
                backgroundColor:'#FDFEFE',
                elevation: 2, 
                padding: 5,
                shadowColor:'#000000',
                shadowOpacity:0.2,
                shadowRadius: 5,
                shadowOffset:{
                    height: 1,
                    width: 0,

                },

            }}>
           {OTP_COUNTRY_LIST.map(item =>{

                return (
                <TouchableWithoutFeedback
                key= {item.id} onPress={() =>{
                    setSelectedCountry(item);
                    setShowListCountry(false);

                }}>
                <View 
                    style={{
                        flexDirection:'row',
                         paddingVertical: 10, 
                         padding: 5,
                         }}>
                      <View 
                        style ={{
                            flex: 0.3,
                             flexDirection:'row',
                             alignItems:'center',
                             }}>
                    <Image 
                     style={{width: 40, height: 40, marginRight: 15}}
                     source={item.image}    
                />
                 <Text>{item.country}</Text>
                </View>
                <View style={{flex:0.7, alignItems: 'flex-end'}}>
                    <Text>{item.code}</Text>
                </View>
                </View></TouchableWithoutFeedback>
                );
            })}

            </View> : null}
            <TouchableOpacity onPress={() =>navigation.navigate('VerifyOtpScreen')}>
            <View 
                style={{
                    backgroundColor:'black', 
                    marginTop: 10, 
                    alignItems:'center',
                    paddingVertical: 12,
                    borderRadius: 5,
                    }}>
                <Text style={{color:'white'}}>Continue</Text>
            </View>
            </TouchableOpacity>
            <ORView/>
            <View 
                style={{
                    backgroundColor:'#D5DBDB',
                     flexDirection:'row',
                     paddingVertical:15,
                     alignItems:'center',
                     paddingHorizontal:10,
                     borderRadius: 10,



                     }}>
            <Image 
                     style={{width: 25, height: 25, marginRight: 15}}
                     source={require("../../assets/google.png")}    
                />
        <Text 
            style={{
                fontWeight:'bold',
                fontSize: 17, 
                textAlign:'center',
                }}>
                Continue With Google
                </Text>
            </View>
            <ORView/>
            <Text style={{color: '#7F8C8D'}}>
            Lorem lpsum is simply dummy text of The printing and typesetting industry Lorem lpsum has been the industry,s standard dummy Lorem lpsum has benn the indutry dummy text ever since the 1500s
            </Text>
            <View 
                style={{flex: 1, justifyContent:'flex-end'}}>
             <View style={{flexDirection: 'row', flexWrap:'wrap'}}>
             <Text>The site is protected by reCAPTCHA and the google</Text>
             <Text 
                style={{
                    textDecorationLine:'underline',
                    paddingHorizontal: 5,
              }}>
              Privacy Policy
              </Text>
             <Text> and  </Text>
             <Text
                Style={{
                    textDecorationLine:'underline',
                    paddingHorizontal: 5,
   
                }}>Terms of Services </Text>
            <Text>apply.</Text></View>
            </View>
        </View>
       </SafeAreaComp>
    )

}