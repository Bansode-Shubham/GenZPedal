/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import SplashScreen from './src/Screens/Splash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStartedScreen from './src/Screens/GetStarted';
import OtpScreen from './src/Screens/Otp';
import VerifyOtpScreen from './src/Screens/VerifyOtp';
import UserNameScreen from './src/Screens/UserName';
import PrivacyPolicyScreen from './src/Screens/PrivacyPolicy';
import DiscountNewsScreen from './src/Screens/NewsDiscount';
import MoveFasterScreen from './src/Screens/MoveFaster';
import CommunityGuidelinesScreen from './src/Screens/CommunityGuidelines';
import CameraScreen from './src/Screens/Camera';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='SplashScreen'>
      <Stack.Screen 
        options={{headerShown: false}} 
        name="SplashScreen"
        component={SplashScreen}   
        />
        <Stack.Screen 
        options={{headerShown: false}} 
        name="GetStartedScreen"
        component={GetStartedScreen}   
        />
        <Stack.Screen 
        options={{headerShown: false}} 
        name="OtpScreen"
        component={OtpScreen}   
        />
        <Stack.Screen 
        options={{headerShown: false}} 
        name="VerifyOtpScreen"
        component={VerifyOtpScreen}   
        />
        <Stack.Screen 
        options={{headerShown: false}} 
        name="UserNameScreen"
        component={UserNameScreen}   
        />
        <Stack.Screen 
        options={{headerShown: false}} 
        name="PrivacyPolicyScreen"
        component={PrivacyPolicyScreen}   
        />
        <Stack.Screen 
        options={{headerShown: false}} 
        name="DiscountNewsScreen"
        component={DiscountNewsScreen}   
        />
        <Stack.Screen 
        options={{headerShown: false}} 
        name="MoveFasterScreen"
        component={MoveFasterScreen}   
        />
        <Stack.Screen 
        options={{headerShown: false}} 
        name="CommunityGuidelinesScreen"
        component={CommunityGuidelinesScreen}   
        />
        <Stack.Screen 
        options={{headerShown: false}} 
        name="CameraScreen"
        component={CameraScreen}   
        />
        
    </Stack.Navigator>
  </NavigationContainer>
    
  );
}
export default App;
 