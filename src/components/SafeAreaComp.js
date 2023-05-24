import {View, Text, SafeAreaView} from 'react-native'
import React from 'react'

export default function SafeAreaComp(props){
    return(
        <SafeAreaView style={{flex: 1}}>
            {props.children}
        </SafeAreaView>

    )
}