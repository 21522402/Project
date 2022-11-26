import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { IMG_SignUp } from '../../assets/images'
import { Input } from '../../components/Input/Input'
import {BackIcon} from '../../assets/icon/index'
import Button from '../../components/Button/Button'
import styles from './styles'
const SignUp = ({navigation}) => {
  return (
    <SafeAreaView>
        <TouchableOpacity style={styles.backTouch} onPress={
            () => {
                navigation.navigate('Login')
            }
        }>
            <View style={styles.backIconContainer}>
                <Image style={styles.backIcon} source={BackIcon}/>
            </View>
        </TouchableOpacity>
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image style={styles.image} source={IMG_SignUp}/>
            </View>
            <Text style={styles.title}>Sign up</Text>
            <Text style={styles.infoText}>Create your account</Text>
            <View style={styles.LoginInput}>
                <Input label="Name" secureTextEntry={false}/>
                <View style={{height: 16}}></View>
                <Input label="Email" secureTextEntry={false}/>
                <View style={{height: 16}}></View>
                <Input label="Password" secureTextEntry={true}/>
            </View>
            <TouchableOpacity style={styles.textForgotPass}>
                <Text style={styles.textPassword}>Forgot Password?</Text>
            </TouchableOpacity>
            <Button onClicked={() => {navigation.navigate('MyTabs')}} label="Sign up" style={styles.buttonLogin}/>
            <TouchableOpacity onPress={() => { 
                navigation.navigate('Login')
            }} style={styles.textForgotPass}>
                <Text style={styles.textSignup}>Log in</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default SignUp