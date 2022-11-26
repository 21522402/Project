import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import CUSTOM_COLOR from '../../constants/colors'
import FONT_FAMILY from '../../constants/fonts'
import size from '../../constants/responsive'
import { IMG_Result } from '../../assets/images'
import {BackIcon} from '../../assets/icon'
import Button from '../../components/Button/Button'
import { FacebookIcon, InstagramIcon, GoogleIcon } from '../../assets/icon'
import { useNavigation } from '@react-navigation/native';

export default function ResultScreen({route}) {
    const navigation = useNavigation(); 
    const {title, image, titleContent, bodyContent, isButton} = route.params;
  return (
    <SafeAreaView style={{backgroundColor:'#FFF', height: '100%'}}>
        <TouchableOpacity onPress={() => {navigation.goBack()}} style={styles.backTouch}>
            <View style={styles.backIconContainer}>
                <Image style={styles.backIcon} source={BackIcon}/>
            </View>
        </TouchableOpacity>
        <View style={styles.container}>
            <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.contentContainer}>
            <View style={styles.imgContainer}>
                <Image style={styles.imageContent} source={image}/>
            </View>
            <Text style={styles.titleContent}>{titleContent}</Text>
            <Text style={styles.bodyContent}>{bodyContent}</Text>
            {
                (isButton) ? 
                (
                    <Button label="Continue" styles={{marginTop: 32, width: 309}}/>
                ) : 
                (
                    <View style={styles.iconContainer}>
                        <View style={styles.facebookContainer}>
                            <Image style={styles.facebook} source={FacebookIcon}/>    
                        </View>
                        <View style={styles.instaContainer}>
                            <Image style={styles.insta} source={InstagramIcon}/>    
                        </View>
                        <View style={styles.GoogleContainer}>
                            <Image style={styles.google} source={GoogleIcon}/>    
                        </View>
                    </View>
                )
            }
            
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    contentContainer: {
        alignItems: 'center',
        marginTop: 143,
    },
    imgContainer: {
        width: size.devicesWidth,
        height: 253,
    },
    imageContent: {
        width: '100%',
        height: '100%',
    },
    titleContent: {
        color: CUSTOM_COLOR.BlackOlive,
        fontFamily: FONT_FAMILY.Bold,
        width: size.devicesWidth,
        height: 32,
        fontSize: 24,
        textAlign: 'center',
        marginTop: 16,
        verticalAlign: 'middle',
        lineHeight: 32,
    },
    bodyContent: {
        color: CUSTOM_COLOR.Nickel,
        marginTop: 8,
        textAlign: 'center',
        fontSize: 14,
        lineHeight: 21,
        fontFamily: FONT_FAMILY.Light,
        width: 200,
    },
    backIconContainer:{
        position: 'absolute',
        top: 11.67,
        left: 16,
        borderRadius: 40,
        borderWidth: 1,
        width: 40,
        height: 40,
        borderColor: CUSTOM_COLOR.LightGray,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
       alignItems: 'center',
    },
    titleText: {
        wudth: 341,
        height: 32,
        marginTop: size.reSizeHeight(15),
        textAlign: 'center',
        verticalAlign: 'middle',
        fontSize: 24,
        lineHeight: 32,
        color: CUSTOM_COLOR.BlackOlive,
        fontFamily: FONT_FAMILY.Bold,
    },
    iconContainer:{
        flexDirection: 'row',
        marginTop: 142,
        marginBottom: 16,
    },
    facebookContainer:{
        
    },
    facebook:{
        
    },
    instaContainer:{
        marginLeft: 12,
        marginRight: 12,
    },
})