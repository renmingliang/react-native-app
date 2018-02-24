/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

import LaunchPage from './SeeApp/Main/LaunchPage';

export default class XMGBuy extends Component {
  render() {
    return (
        <Navigator
            // 初始化路由
            initialRoute={{ name: 'LaunchPage', component: LaunchPage }}
            // 页面过渡的方式
            configureScene={(route) => {
                return Navigator.SceneConfigs.PushFromRight;
            }}
            // 实例化组件
            renderScene={(route, navigator) => {
                let Component = route.component;
                return <Component {...route.passProps} navigator={navigator} />
            }}
        />
    );
  }
}

AppRegistry.registerComponent('XMGBuy', () => XMGBuy);
