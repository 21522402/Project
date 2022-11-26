import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import Header from '../Header/index'
import Button from '../Button/Button'
import HashTag from '../HashTag/index'
import CUSTOM_COLOR from '../../constants/colors'
import FONT_FAMILY from '../../constants/fonts'
import size from '../../constants/responsive'
import SavedData from '../../datas/SavedData/SavedData'

const Product = ({navigation, route}) => {
    const {title, longInfo, image, cost, time} = route.params;
    return (
      <SafeAreaView style={{backgroundColor:'#FFF', height:size.devicesHeight}}>
        <Header header={title} onClicked={() => {navigation.goBack()}}/>
        <View style={{alignItems: 'center'}}>
          <View style={styles.container}>
            <View style={styles.imgContainer}>
              <Image source={image} />
            </View>
            <View style={styles.costContainer}>
              <HashTag tag={cost} margin={16}/>
            </View>
            <View>
              <Text style={styles.titleInfo}>
                About the course
              </Text>
              <Text style={styles.textInfo}>
                {longInfo}
              </Text>
            </View>
            <View>
              <Text style={styles.titleDuration}>
                Duration
              </Text>
              <Text style={styles.timeText}>
                {time}
              </Text>
            </View>
            <View style={{height: 53}}></View>
            <View style={{alignSelf: 'center'}}>
              <Button label="Add to cart" onClicked={() => {SavedData.push({
                image: image,
                cost: cost,
                longInfo: longInfo,
                duration: time,
              })}}/>
            </View>
          </View>
        </View>
      </SafeAreaView>
    )
}

export default Product;
const styles = StyleSheet.create({
  container: {
    width: 343,
  },
  imgContainer: {
    marginTop: 20,
    width: 343,
    height: 257,
    alignItems: 'center',
    justifyContent: 'center',
  },
  costContainer: {
    marginTop: 32,
    marginBottom: 24,
    alignSelf: 'flex-end'
  },
  titleInfo: {
    fontSize: 24,
    lineHeight: 32,
    color: CUSTOM_COLOR.BlackOlive,
    fontFamily: FONT_FAMILY.Medium,
    height: 32,
  },
  textInfo: {
    fontSize: 14,
    lineHeight: 25,
    color: CUSTOM_COLOR.BlackOlive,
    fontFamily: FONT_FAMILY.Medium,
    alignSelf: 'stretch',
  },
  titleDuration: {
    fontSize: 24,
    lineHeight: 32,
    color: CUSTOM_COLOR.BlackOlive,
    fontFamily: FONT_FAMILY.Medium,
    height: 32,
    marginTop: 24,
  },
  timeText: {
    ontSize: 14,
    lineHeight: 25,
    color: CUSTOM_COLOR.BlackOlive,
    fontFamily: FONT_FAMILY.Medium,
    alignSelf: 'stretch',
    marginTop: 4,
  }
})