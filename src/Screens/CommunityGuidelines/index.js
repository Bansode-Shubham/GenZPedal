import {View, Text, Image,TouchableOpacity} from 'react-native'
import React from 'react'
import SafeAreaComp from '../../components/SafeAreaComp'

export default function CommunityGuidelinesScreen({navigation}){
    return(
        <SafeAreaComp>
          <View style={{flex: 1, backgroundColor: 'white'}}>
            <View style={{flex:0.3 , backgroundColor: 'white'}}>
                <Image 
                resizeMode="cover"
                style={{
                    width: '100%',
                    height: '100%',
                }} 
                source ={require('../../assets/community.png')}/> 
          </View>
          <View style={{flex: 0.5, padding: 15}}>
          <Text 
                style={{
                fontSize: 20,
                color:'black',
                fontWeight:'600',
          }}>eZPedal's community Guidelines
          </Text>
          <Text 
                style={{
                    fontSize: 30, 
                    color: 'black', 
                    fontWeight: '600'
          }}>Safety and respect for all
             </Text>
         <Text 
                style={{
                fontSize: 20,
                color:'black',
                marginTop: 10,
          }}>We're commited along with millions of riders and drivers, to
          </Text>
          <View style={{padding: 20}}>
          <Text 
                style={{
                fontSize: 17,
                color:'black',
                marginTop: 10,
          }}>Trust everyone with Kindness and respect
          </Text>
          <Text 
                style={{
                fontSize: 17,
                color:'black',
                marginTop: 10,
          }}>Help keep one another safe
          </Text>
          <Text 
                style={{
                fontSize: 17,
                color:'black',
                marginTop: 10,
          }}>follow the law
            </Text>
          </View>
          <Text 
                style={{
                fontSize: 20,
                color:'black',
                marginTop: 10,
          }}> Everyone who uses eZPedal apps is expected to follow these Guidelines
          </Text>
          <Text style={{marginTop: 10, color: 'black'}}>
             You can read our <Text style={{color:'#3498DB'}}>Community Guidelines here</Text>.
             </Text>
          </View>
          <View 
            style={{
                flex: 0.2, 
                justifyContent: 'flex-end',
                paddingHorizontal: 15,
                paddingBottom: 10,

          }}> 
          <TouchableOpacity onPress={() => navigation.navigate('CameraScreen')}>
                <Text style={{
                    backgroundColor: 'black',
                    paddingVertical: 13,
                    color:'white',
                    textAlign:'center',
                    fontSize: 17,


                }}>I understand</Text>

            </TouchableOpacity>
            

          </View>
         </View>
        </SafeAreaComp>
    );
}