import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './slide.style'

const Slides = ({item}) => {
  return (
    <View>
    <Image source={item.image} style ={styles.image} />

    </View>
  )
}

export default Slides