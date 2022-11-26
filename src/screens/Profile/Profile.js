import { View, Text, SafeAreaView , TouchableOpacity, Image} from 'react-native'
import React from 'react'
import styles from './styles'
import {BackIcon} from '../../assets/icon'
import {IMG_Avatar, IMG_Result} from '../../assets/images'

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor:'#FFF', height: '100%'}}>
        <TouchableOpacity onPress={() => {navigation.goBack()}} style={styles.backTouch}>
            <View style={styles.backIconContainer}>
                <Image style={styles.backIcon} source={BackIcon}/>
            </View>
        </TouchableOpacity>
        <View style={styles.container}>
            <Text style={styles.titleText}>Profile</Text>
            <View style={styles.imgAvatarContainer}>
                <Image style={styles.imgAvatar} source={IMG_Avatar}/>
            </View>
            <View style={styles.profileMenu}>
                <TouchableOpacity onPress={() => {navigation.navigate('YourCourses')}}>
                    <View style={styles.MenuItem}>
                        <Text style={styles.textItem}>Your Courses</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => {navigation.navigate('SavedScreen', {title: "Payment",
                                                                            image: IMG_Result,
                                                                            titleContent: "No payment method",
                                                                            bodyContent: "You don’t have any payment method",
                                                                            isButton: true
                                                                            })}}>
                    <View style={styles.MenuItem}>
                        <Text style={styles.textItem}>Saved</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => {navigation.navigate('ResultScreen', {title: "Payment",
                                                                            image: IMG_Result,
                                                                            titleContent: "No payment method",
                                                                            bodyContent: "You don’t have any payment method",
                                                                            isButton: true
                                                                            })}}>
                    <View style={styles.MenuItem}>
                        <Text style={styles.textItem}>Payment</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={()=>
                {navigation.navigate('Login')}
            }>
                <Text style={styles.bottomText}>Log out</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Profile