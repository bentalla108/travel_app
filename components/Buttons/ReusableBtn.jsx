import { StyleSheet, Text, TouchableOpacity,  } from 'react-native'
import React from 'react'
import { SIZES } from '../../constants/theme'

const ReusableBtn = ({btnText ,
    btnTextcolor, onPress ,
    width , 
    borderWidth, 
    borderColor , 
    backgroundColor}) => {
  return (


        <TouchableOpacity onPress={onPress}  style={styles.btnStyles( 
            width , 
            borderWidth, 
            borderColor , 
            backgroundColor)}>

           <Text styles ={styles.btnTextStyles(btnTextcolor)}>{btnText}</Text>
        
        </TouchableOpacity>

   


  )
}

export default ReusableBtn

const styles = StyleSheet.create({
    btnTextStyles: (btnTextcolor) => ({
      fontFamily: 'medium',
      fontSize: SIZES.medium,
      color: btnTextcolor,

    }),


    btnStyles :(width , borderWidth, borderColor , backgroundColor)=>({
        height :45,
        width:width,
        backgroundColor: backgroundColor,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius :SIZES.small,
        borderColor :borderColor,
        borderWidth : borderWidth,
        

            })
  });