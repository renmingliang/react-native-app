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
    TouchableOpacity
} from 'react-native';

// 组件类
export default class HomeDetail extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>this.props.navigator.pop()}>
                    <Text style={styles.welcome}>
                        首页的详情页
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

// 样式类
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});

//输出组件
module.exports = HomeDetail;
