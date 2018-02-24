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
    View,
    ScrollView
} from 'react-native';

import CommonNav from './../Main/CommonNav';
import CommonCell from './../Main/CommonCell';
// 组件类
export default class More extends Component {
    render() {
        return (
            <View style={styles.container}>
                <CommonNav
                    title='更多'
                    rightIconName="icon_mine_setting"
                />
                <ScrollView>
                    <View style={{marginTop:15}}>
                        <CommonCell leftTitle="扫一扫" />
                    </View>
                    <View style={{marginTop:15}}>
                        <CommonCell leftTitle="省流量模式" isSwitch={true}/>
                        <CommonCell leftTitle="消息提醒" />
                        <CommonCell leftTitle="邀请好友" />
                        <CommonCell leftTitle="清空缓存" rightTitle="1.55M" />
                    </View>
                    <View style={{marginTop:15}}>
                        <CommonCell leftTitle="意见反馈" />
                        <CommonCell leftTitle="问卷调查" />
                        <CommonCell leftTitle="支付帮助" />
                        <CommonCell leftTitle="网络诊断" />
                        <CommonCell leftTitle="关于美团" />
                        <CommonCell leftTitle="我要应聘" />
                    </View>
                    <View style={{marginTop:15}}>
                        <CommonCell leftTitle="精品应用" />
                        <CommonCell leftTitle="设置" />
                        <CommonCell leftTitle="扫一扫" />
                        <CommonCell leftTitle="扫一扫" />
                        <CommonCell leftTitle="扫一扫" />
                        <CommonCell leftTitle="扫一扫" />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

// 样式类
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8'
    }
});

// 输出组件
module.exports = More;
