/**
 * Created by Administrator on 2016/11/17.
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

import CommonCell from './../Main/CommonCell';
import HomeGuessYouLikeListView from './HomeGuessYouLikeListView';

// 组件类
export default class HomeGuessYouLike extends Component {
    render() {
        return (
            <View style={styles.container}>
                <CommonCell
                    leftTitle="猜你喜欢"
                    rightTitle='查看全部'
                    leftImageName="cnxh"
                />
                <HomeGuessYouLikeListView />
            </View>
        );
    }
}

// 样式类
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop:15
    },
});

// 输出组件
module.exports = HomeGuessYouLike;
