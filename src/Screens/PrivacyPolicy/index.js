import {View, Text , Image, TouchableOpacity} from 'react-native';
import React,{useState}from 'react';
import SafeAreaComp from '../../components/SafeAreaComp';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BouncyCheckbox from "react-native-bouncy-checkbox";


export default function PrivacyPolicyScreen({navigation}){

    const [nextStyle, setNextStyle]=useState({
        backgroundColor:'#E5E7E9',
        color:'black',
        });
    return (
        <SafeAreaComp>
            <View style={{flex: 1, padding: 15, backgroundColor: 'whiite'}}>
                <View style={{flexDirection:"row", marginTop: 20}}>
                 <View style={{flex: 0.3 , justifyContent: 'center'}}>
                 <Image 
                    style={{
                    width: 100,
                    height: 100,
                    }}
                    source ={require('../../assets/edit.png')}
                    />

                 </View>  
                <View style={{flex: 0.7,alignItems:'center'}}>
                 <Text
                    style={{
                    fontSize: 30,
                    color: 'black',
                    textAlign:'justify',      
                }}>
                Accepts eZPedal{'\n'}Terms & Review{'\n'}Privacy Notice 
                </Text>
                 </View> 
             </View>
            <View style={{marginTop: 20, flexWrap:'wrap',flexDirection:'row'}}>
            <Text>
                By Selecting 'I Agree' below I have received and agree to the 
            <Text 
                style={{
                    color:'#5DADE2',
            }}>
            Terms of use
            </Text>{' '}
            and acknowlege the{' '}
            <Text 
                style={{
                    color:'#5DADE2',
            }}>
            Privacy Notice.
            </Text>{' '}I am at least 18 years of age.
            </Text>
            </View>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
           <View style={{
                borderTopColor: '#E5E7E9',
                borderTopWidth: 1,
                paddingTop: 30,
           }}>
            <View 
                 style={{
                    justifyContent:'space-between', 
                    flexDirection:'row',
                    marginBottom: 30,
            }}>
            <Text style={{
                color:'black',

            }}>I agree</Text>
            <BouncyCheckbox 
                fillColor="black"
                iconStyle={{
                    borderRadius: 0,
                }}
                innerIconStyle={{
                    borderRadius: 0,
                }}
                onPress={(isChecked) => console.log(isChecked)} 
                />
            </View>
           <View 
            style={{justifyContent:'space-between', flexDirection:'row'}}>
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
            <TouchableOpacity
                onPress={()=> navigation.navigate('DiscountNewsScreen')}>
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
            </View> 
        </SafeAreaComp>
    );
}