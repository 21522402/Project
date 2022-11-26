import { View, Text, SafeAreaView , TouchableOpacity, Image, FlatList} from 'react-native'
import React from 'react'
import styles from './styles'
import {BackIcon, NextIcon, NotiIcon} from '../../assets/icon'
import {IMG_Setting} from '../../assets/images'
import SettingItem from '../../components/SettingItem'
import settingdatas from '../../datas/settingdatas'
import Switch from '../../components/Switch/Switch'
const Settings = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
        <TouchableOpacity style={styles.backTouch} onPress={() => navigation.goBack()}>
            <View style={styles.backIconContainer}>
                <Image style={styles.backIcon} source={BackIcon}/>
            </View>
        </TouchableOpacity>
        <View style={styles.container}>
            <Text style={styles.titleText}>Profile</Text>
            <View style={styles.imgAvatarContainer}>
                <Image style={styles.imgAvatar} source={IMG_Setting}/>
            </View>
            <View style={styles.profileMenu}>
            <></>
            
            {/* Nofication button */}
            <View style={styles.container2}>
                <View style={styles.containerInfo}>
                    <View>
                        <Image source={NotiIcon}/>
                    </View>
                    <Text style={styles.titleItem}>
                        Nofication
                    </Text>
                </View>
                <View style={styles.arrowContainer}>
                    <Switch/>
                </View>
            </View>

            <></>
            <Text style={styles.titleInfo}>
                Account information
            </Text>
            <FlatList 
                data={settingdatas} 
                renderItem={({item}) => 
                    <SettingItem 
                        avatar={item.image}
                        title={item.title}
                        info={item.body}
                    />       
            }
            />
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Settings