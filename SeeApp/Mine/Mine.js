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
    Image,
    ScrollView
} from 'react-native';

import CommonCell from './../Main/CommonCell';
import MineOrderView from './MineOrderView';
import MineHeadView from './MineHeadView';

// 导入本地的数据
var orderArr = require('./OrderData.json');

// 组件类
export default class Mine extends Component {
    render() {
        return (
            <ScrollView
                style={{backgroundColor:'#e8e8e8'}}
            >
                <MineHeadView />
                <View>
                    <CommonCell
                        leftTitle="我的订单"
                        leftImageName="draft"
                        rightTitle="查看全部订单"
                    />
                    <MineOrderView
                        dataArr={orderArr}
                    />
                </View>

                <View style={{marginTop:15}}>
                    <CommonCell
                        leftTitle="我的钱包"
                        leftImageName="pay"
                        rightTitle="¥9999.999"
                    />
                    <CommonCell
                        leftTitle="抵用券"
                        leftImageName="like"
                        rightTitle="1张"
                    />
                </View>
                <View style={{marginTop:15}}>
                    <CommonCell
                        leftTitle="积分商城"
                        leftImageName="avatar_enterprise_vip"
                    />
                    <CommonCell
                        leftTitle="VIP会员"
                        leftImageName="avatar_vip"
                    />
                    <CommonCell
                        leftTitle="我的收藏"
                        leftImageName="avatar_vgirl"
                    />
                    <CommonCell
                        leftTitle="客服中心"
                        leftImageName="avatar_grassroot"
                    />
                </View>
                <View style={{marginTop:15}}>
                    <CommonCell
                        leftTitle="今日推荐"
                        leftImageName="collect"
                        rightImageName="me_new"
                    />
                </View>
                <View style={{marginTop:15}}>
                    <CommonCell
                        leftTitle="我要合作"
                        leftImageName="card"
                        rightTitle="轻松开店,招财进宝"
                    />
                </View>
            </ScrollView>
        );
    }
}

// 样式类
const styles = StyleSheet.create({

});

// 输出组件
module.exports = Mine;
