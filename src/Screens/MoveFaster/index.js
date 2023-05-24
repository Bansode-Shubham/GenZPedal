import {View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import SafeAreaComp from '../../components/SafeAreaComp';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function MoveFasterScreen({navigation}){
    return(
        <SafeAreaComp>
        <View style={{flex: 1, backgroundColor:'white', padding: 15}}>
        <View style={{flex: 0.7, justifyContent: 'center'}}>
          <View style={{alignItems: 'center'}}>
            <Image 
                style={{
                width: 150,
                height: 150,
            }} 
            source ={require('../../assets/ev.png')}

            />
          </View>
            <Text 
                style={{
                    marginTop: 20,
                    fontSize: 30, 
                    color: 'black', 
                    fontWeight: '600'
                    }}>
                Get moving faster with eZPedal
                </Text>
                <Text style={{marginTop: 10}}>
                For a reliable trip, Uber collects location data from the time you open the app until a trip ends. This improves pick-up support and more.
                </Text>
                <Text style={{narginTop: 10, color: '#3498DB' }}>Learn more</Text>

            </View>
            <View 
                style={{
                    flex: 0.3,
                    justifyContent: 'flex-end',
                    alignItems:'flex-end'
                    }}>
            <TouchableOpacity onPress={()=> navigation.navigate('CommunityGuidelinesScreen')}>    
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
                </View></TouchableOpacity>
        
            </View>
        </View>
     </SafeAreaComp>
    );
} 