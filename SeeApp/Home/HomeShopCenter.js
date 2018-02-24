/**
 * Created by Administrator on 2016/11/17.
 */
/**
 * Created by Administrator on 2016/11/14.
 */
import React, { Component, PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';

import CommonCell from './../Main/CommonCell';

// 组件类
export default class HomeShopCenter extends Component {
    static propTypes = {
        dataObj:PropTypes.object,
        //用于闭包函数回调，属性
        goBackWithData: PropTypes.func
    };

    static defaultProps = {
    };

    render() {
        return (
            <View style={styles.container}>
                <CommonCell
                    leftTitle="购物中心"
                    rightTitle={this.props.dataObj.tips}
                    leftImageName="gwzx"
                />
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{backgroundColor:'white', marginTop:1}}
                >
                    {this.renderItem()}
                </ScrollView>
            </View>
        );
    }
    renderItem(){
        // 组件数组
        let itemArr = [];
        // 数据数组
        let dataArr = this.props.dataObj.data;
        // 遍历
        for (var i = 0; i < dataArr.length; i++) {
            // 取出单个数据对象
            let data = dataArr[i];
            // 创建组件装入数组
            itemArr.push(
                <TouchableOpacity key={i} style={styles.cellStyle} onPress={()=>this.dealWithPress(data.detailurl)}>
                    <Image source={{uri: data.img}} style={styles.imgStyle}/>
                    <Text>{data.name}</Text>
                    <View style={styles.saleStyle}>
                        <Text style={{color:"white", fontSize:12}}>{data.showtext.text}</Text>
                    </View>
                </TouchableOpacity>
            );
        }
        // 返回组件数组
        return itemArr;
    }
    // 处理点击事件
    dealWithPress(data){
        var newData = this.dealWithRequestUrl(data);
        // 断点
        // debugger;
        this.props.goBackWithData(newData);
    }
    // 处理请求的URL
    dealWithRequestUrl(url){
        // url的后缀
        let lastUrl = "?uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_term=6.6&utm_source=AppStore&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&version_name=6.6&userid=160495643&utm_medium=iphone&lat=23.134709&utm_campaign=AgroupBgroupD100Ghomepage_shoppingmall_detailH0&token=b81UqRVf6pTL4UPLLBU7onkvyQoAAAAAAQIAACQVmmlv_Qf_xR-hBJVMtIlq7nYgStcvRiK_CHFmZ5Gf70DR47KP2VSP1Fu5Fc1ndA&lng=113.373890&f=iphone&ci=20&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594"
        // 判断
        if(url.search('imeituan') !== -1){
            return url.replace('imeituan://www.meituan.com/web/?url=', '')+ lastUrl;
        }else{
            return url;
        }
    }}

// 样式类
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:15
    },
    cellStyle:{
        padding:10
    },
    imgStyle:{
        width:120,
        height:90,
        borderRadius:5
    },
    saleStyle:{
        backgroundColor:'orange',
        position:'absolute',
        left:10,
        top:60,
        paddingRight:3,
        borderTopRightRadius:8,
        borderBottomRightRadius:8
    }
});

// 输出组件
module.exports = HomeShopCenter;
