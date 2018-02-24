/**
 * Created by Administrator on 2016/11/16.
 */
/**
 * Created by Administrator on 2016/11/14.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import CommonNav from './../Main/CommonNav';
// 组件类
export default class Shop extends Component {
    render() {
        return (
            <View style={styles.container}>
                <CommonNav
                    title='商家'
                    leftIconName="icon_shop_local"
                    rightIconName="icon_shop_search"
                />
                <Text style={styles.welcome}>
                    商家
                </Text>
            </View>
        );
    }
}

// 样式类
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});

// 输出组件
module.exports = Shop;
