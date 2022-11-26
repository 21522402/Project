
import React from 'react';
import CoursesCard from '../screens/CoursesCard/CoursesCard';
import Profile from '../screens/Profile/Profile';
import Settings from '../screens/Settings/Setting';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View, Image, Text, StyleSheet} from 'react-native';
import { CourseIcon, SettingIcon, ProfileIcon } from '../assets/icon';
import CUSTOM_COLOR from '../constants/colors';
import FONT_FAMILY from '../constants/fonts';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
      <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                height: 98,
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                borderTopWidth: 1,
                borderTopColor: CUSTOM_COLOR.LightGray,
                borderLeftWidth: 1,
                borderLeftColor: CUSTOM_COLOR.LightGray,
                borderRightWidth: 1,
                borderRightColor: CUSTOM_COLOR.LightGray,
            },
        }}
        >
        <Tab.Screen name="Course" component={CoursesCard} options={{
            tabBarIcon: ({focused}) => {
                    return (
                        <View style={styles.containerTab}>
                            <View style={styles.containerIcon}>
                                <Image style={[styles.tabIcon, {
                                    tintColor: focused ? CUSTOM_COLOR.Orange: CUSTOM_COLOR.LightGray,
                                }]} source={CourseIcon}
                                />
                            </View>
                            <Text style={[styles.tabInfo, {
                                color: focused ? CUSTOM_COLOR.Orange: CUSTOM_COLOR.LightGray,
                            }]}>Courses</Text>
                        </View>
                    )
            }
        }}/>
        <Tab.Screen name="Profile" component={Profile} options={{
            tabBarIcon: ({focused}) => {
                    return (
                        <View style={styles.containerTab}>
                            <View style={styles.containerIcon}>
                                <Image style={[styles.tabIcon, {
                                    tintColor: focused ? CUSTOM_COLOR.Orange: CUSTOM_COLOR.LightGray,
                                }]} source={ProfileIcon}
                                />
                            </View>
                            <Text style={[styles.tabInfo, {
                                color: focused ? CUSTOM_COLOR.Orange: CUSTOM_COLOR.LightGray,
                            }]}>Profile</Text>
                        </View>
                    )
            }
        }}/>
        <Tab.Screen name="Setting" component={Settings} options={{
            tabBarIcon: ({focused}) => {
                    return (
                        <View style={styles.containerTab}>
                            <View style={styles.containerIcon}>
                                <Image style={[styles.tabIcon, {
                                    tintColor: focused ? CUSTOM_COLOR.Orange: CUSTOM_COLOR.LightGray,
                                }]} source={SettingIcon}
                                />
                            </View>
                            <Text style={[styles.tabInfo, {
                                color: focused ? CUSTOM_COLOR.Orange: CUSTOM_COLOR.LightGray,
                            }]}>Settings</Text>
                        </View>
                    )
            }
        }}/>
      </Tab.Navigator>
    );
  }

  export default MyTabs

  const styles = StyleSheet.create({
    containerTab: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 64,
        height: 54,
    },
    containerIcon: {
        width: 28,
        height: 36,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabInfo: {
        width: 60,
        height: 18,
        textAlign: 'center',
        lineHeight: 18,
        fontSize: 14,
        fontFamily: FONT_FAMILY.Regular
    }
  })