/**
 * Created by Administrator on 2016/11/14.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import Main from './Main'

// 组件类
export default class LaunchPage extends Component {
    render() {
        return (
            <Image source={{uri: 'launchimage'}} style={{flex:1}}/>
        );
    }

    componentDidMount() {
        const {navigator} = this.props;
        this.timer =  setTimeout(()=>{
            navigator.replace({
                component:Main
            })
        }, 1500)
    }
}

// 输出组件
module.exports = LaunchPage;
