import {View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import SafeAreaComp from '../../components/SafeAreaComp';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function DiscountNewsScreen({navigation}){
    return(
        <SafeAreaComp>
        <View style={{flex: 1, backgroundColor:'white', padding: 15}}>
        <View style={{flex: 0.7, justifyContent: 'center'}}>
          <View style={{alignItems: 'center'}}>
            <Image 
                style={{
                width: 100,
                height: 100,
            }} source ={require('../../assets/email.png')}

            />
          </View>
            <Text 
                style={{
                    marginTop: 20,
                    fontSize: 30, 
                    color: 'black', 
                    fontWeight: '600'
                    }}>
                Receive eZPedal info discounts and news
                </Text>
                <Text style={{marginTop: 10}}>
                 eZPedal would like to share special offers. recommendations and product updates to opt out of promotional messages. you can click the link below or manage your privacy settings in the app at any time
                </Text>
                <Text style={{narginTop: 10, color: '#3498DB' }}>Unsubscribe</Text>

            </View>
            <View 
                style={{
                    flex: 0.3,
                    justifyContent: 'flex-end',
                    alignItems:'flex-end'
                    }}>
            <TouchableOpacity onPress={()=> navigation.navigate('MoveFasterScreen')}>    
            <View 
                style={{
                    height: 60,
                    width: 60, 
                    backgroundColor:'black',
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius: 10, 
                    }}>
                    <AntDesign name='arrowright' color={'white'} size={25}/>   
                </View>
            </TouchableOpacity>
        
            </View>
        </View>
     </SafeAreaComp>
    );
} 