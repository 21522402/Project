import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native'
import React, {Component, useState} from 'react'
import CUSTOM_COLOR from '../../constants/colors'
import FONT_FAMILY from '../../constants/fonts'
import { EyeIcon, HideIcon } from '../../assets/icon'

export class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            isPasswordShow: true,
        };        
    }

    setHidePassWord = () => {
        this.setState({
            isPasswordShow: !this.state.isPasswordShow,
        });
    }

    setValue = text => {
        this.state.value = text;
    };

    render(){
        return (
            <View style={styles.container}>
                {this.props.secureTextEntry === true ? 
                    (
                        <View styles={styles.containerTypePassword}>
                            <TextInput
                                placeholder={this.props.label}
                                style={[styles.containertextInput, {width: 260}]}
                                secureTextEntry={this.state.isPasswordShow}
                                onChangeText={text => this.setValue(text)} 
                            />
                            <View style={styles.containerEye}>
                                <TouchableOpacity onPress={this.setHidePassWord}>
                                    {
                                    this.state.isPasswordShow === true ?
                                        (<Image source={EyeIcon}/>):(<Image source={HideIcon}/>)
                                    }
                                </TouchableOpacity>
                            </View>
                        </View>
                    ):(
                        <TextInput
                            placeholder={this.props.label}
                            style={styles.containertextInput}
                            onChangeText={text => this.setValue(text)}
                        />
                    )
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 343,
        height: 53,
        borderRadius: 12,
        borderColor: CUSTOM_COLOR.Nickel,
        borderWidth: 1,
        justifyContent: 'center',
    },
    containertextInput: {
        color: CUSTOM_COLOR.Nickel,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: FONT_FAMILY.Regular,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 16,
        borderRadius: 12,
        height: '100%',
        width: '100%',
    },
    containerEye: {
        position: 'absolute',
        width: 24,
        height: 24,
        top: 14.5,
        right: 16,
    }
})