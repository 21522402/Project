import React, {useState} from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import styles from './styles';
import { IMG_Illustration } from '../../assets/images';
import IntroScreen from '../IntroScreen/IntroScreen';
const SplashScreen = () => {
    const [currentScreen, setCurrentScreen] = useState(true);

    setTimeout(() => {
        setCurrentScreen(false)
    }, 4000);

    if(currentScreen)
        return ( 
            <SafeAreaView>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.imageSplashScreen} source={IMG_Illustration}/>
                    </View>
                    <Text style={styles.textContainer}>
                        CodeFactory
                    </Text>
                </View>
            </SafeAreaView>
        )
    return (
        <IntroScreen/>
    )
        
};
export default SplashScreen;
