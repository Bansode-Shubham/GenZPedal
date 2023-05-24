import {View, Text, Image,TouchableOpacity} from 'react-native'
import React from 'react'
import SafeAreaComp from '../../components/SafeAreaComp'
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function GetStartedScreen({navigation}){
    return(
        <View style={{flex: 1, backgroundColor:'white'}}>
           <SafeAreaComp>
           <View 
                style={{flex: 0.6, 
                alignItems:'center', 
                justifyContent:'space-between',
                paddingVertical: 10,

                }}>
            <Text 
                style={{
                fontSize: 40,
                fontWeight: '600',
                color:'grey',
            }}>
            eZPedal
            </Text>
            <Image
                resizeMode="contain"
                style={{height: 520}}
                source={require('../../assets/logo1.jpg')}></Image>

            <Text style={{

                fontSize: 40,
                fontWeight:'500',
                color: 'grey',
            }}>
                Ride With Safety
            </Text>     
           </View>


           <View 
                style={{
                    flex: 0.4, 
                    justifyContent : 'flex-end',
                    paddingHorizontal:15,
                    paddingVertical: 10
                    }}>
                
              <TouchableOpacity onPress={()=> navigation.navigate('OtpScreen')}>
              <View 
                style={{
                    backgroundColor:"black", 
                    flexDirection: "row",
                    padding:15,
                }}>
                <View style={{flex: 0.8, alignItems: 'center'}}>
                <Text style={{color: "white", fontSize: 17}}> Get Started</Text>
                </View>
                <View style={{flex: 0.2, alignItems:'flex-end'}}>
                <Text>
                    <AntDesign name="arrowright" size={30} color="white"></AntDesign>
                </Text>
                </View>
             </View>
              </TouchableOpacity>  
           </View> 
        </SafeAreaComp>
    </View>
    )

}