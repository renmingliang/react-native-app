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
    View,
    WebView
} from 'react-native';

// 组件类
export default class HomeShopCenterDetail extends Component {
    render() {
        return (
            <WebView
                automaticallyAdjustContentInsets={true}
                style={styles.webView}
                source={{uri: this.props.api_url}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={true}
            />
        );
    }
}

// 样式类
const styles = StyleSheet.create({

});

// 输出组件
module.exports = HomeShopCenterDetail;
