import {View, Text, StyleSheet} from 'react-native'
import React,{useEffect, useState}from 'react'
import SafeAreaComp from '../../components/SafeAreaComp'
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';
import AntDesign from 'react-native-vector-icons/AntDesign'
import {TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
    root: {flex: 1, padding: 20},
    title: {textAlign: 'center', fontSize: 30},
    codeFieldRoot: {
        marginTop: 30,
        marginLeft: 0,
        marginRight: 'auto',

    },
    cell: {
      width: 40,
      height: 40,
      lineHeight: 38,
      fontSize: 24,
      borderWidth: 2,
      borderRadius: 5,
      borderColor: '#00000030',
      textAlign: 'center',
      backgroundColor:'#E5E7E9',
      marginRight: 20,
    },
    focusCell: {
      borderColor: '#000',
    },
  });
  
const CELL_COUNT = 4;
export default function VerifyOtpScreen({navigation}){
    const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const [nextStyle, setNextStyle]=useState({
    backgroundColor:'#E5E7E9',
    color:'black',

    });
  useEffect(() =>{
    console.log(value.length);
    if(value.length == 4){
      setNextStyle({
        backgroundColor:'black',
        color:'white',

      });
    } else if(value.length< 4){
      setNextStyle({
        backgroundColor:'#E5E7E9',
        color: 'black', 
      });
    }
  },[value]);
    return(
        <SafeAreaComp>
        <View style={{flex: 1, padding: 15, backgroundColor:'white'}}>
        <Text 
            style={{
            fontSize: 20,
            color:'black',
        }}>
        Enter 4-digit code sent you at</Text>
        <Text
            style={{
            fontSize: 20,
            color: 'black',
            marginTop: 3,
            }}>
            +917709778011
            </Text>
           <CodeField
            ref={ref}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
        />
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
            <TouchableOpacity onPress={() => navigation.navigate('UserNameScreen')} >
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