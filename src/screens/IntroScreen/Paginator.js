import { StyleSheet, Text, View, Animated } from 'react-native'
import React from 'react';
import CUSTOM_COLOR from '../../constants/colors';
import size from '../../constants/responsive';

const Paginator = ({data, scrollX}) => {
  return (
    <View style={styles.container}>
      {
        data.map((_, i) => {
            const inputRange = [(i - 1) * size.devicesWidth, i * size.devicesWidth, (i + 1) * size.devicesWidth];

            const dotWidth = scrollX.interpolate({
                inputRange,
                outputRange: [6, 16, 6],
                extrapolate: 'clamp',
            });

            const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0.1,1,0.3],
                extrapolate: 'clamp',
            })
            
            return <Animated.View style={[styles.dot, {width: dotWidth, opacity}]} key={i.toString()}/>;
        }) 
      }
    </View>
  )
}

export default Paginator

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 64,
    },
    dot: {
        height: 6,
        borderRadius: 4,
        backgroundColor: CUSTOM_COLOR.LightBlue,
        marginHorizontal: 8,
    }
})