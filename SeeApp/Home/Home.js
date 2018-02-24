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
    TouchableOpacity,
    TextInput,
    Image,
    InteractionManager,
    ScrollView
} from 'react-native';

//获取下级页面组件
import HomeDetail from './HomeDetail';
import HomeTopView from './HomeTopView';
import HomeMiddleView from './HomeMiddleView';
import HomeSaleView from './HomeSaleView';
import HomeShopCenter from './HomeShopCenter';
import HomeShopCenterDetail from './HomeShopCenterDetail';
import HomeGuessYouLike from './HomeGuessYouLike';

//导入数据
var topDataArr = require('./../../LocalData/TopMenu.json').data;
var middleData = require('./../../LocalData/HomeTopMiddleLeft.json');
var saleDataArr = require('./../../LocalData/XMG_Home_D4.json').data;
var shopCenterArr = require('./../../LocalData/XMG_Home_D5.json');

//获取尺寸
let Dimensions = require('Dimensions');
let {width, height, scale} = Dimensions.get('window');

// 组件类
export default class Home extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }
    render() {
        return (
            <View style={styles.container}>
                {/*导航*/}
                {this.renderNav()}
                <ScrollView>
                    {/*滚动轮播图*/}
                    <HomeTopView  dataArr={topDataArr}/>
                    <HomeMiddleView dataObj={middleData} />
                    <HomeSaleView dataArr={saleDataArr} {...this.props}/>
                    {/*购物中心*/}
                    <HomeShopCenter dataObj={shopCenterArr} goBackWithData={(data)=>this.dealWithShopCenterEvent(data)}/>
                	{/*猜你喜欢*/} 
                    <HomeGuessYouLike />
                </ScrollView>
            </View>
        );
    }
    //导航
    renderNav(){
        return(
            <View style={styles.navStyle}>
                {/*左边*/}
                <TouchableOpacity onPress={()=>this.dealWithPress()}>
                    <Text style={{color:'white'}}>广州</Text>
                </TouchableOpacity>
                {/*中间*/}
                <TextInput
                    placeholder="请输入商家 商圈 品类"
                    style={styles.textInputStyle}
                    underlineColorAndroid="transparent"
                />
                {/*右边*/}
                <View style={{ flexDirection:'row'}}>
                    <Image source={{uri:'icon_homepage_message'}} style={styles.navImageStyle}/>
                    <Image source={{uri:'icon_homepage_scan'}} style={styles.navImageStyle}/>
                </View>
            </View>
        )
    }
    dealWithPress(){
        //优化卡顿现象
        const  {navigator} = this.props;
        InteractionManager.runAfterInteractions(function(){
            navigator.push({
                name:'详情页',
                component: HomeDetail
            });
        });
    }
    // 处理购物中心回传数据
    dealWithShopCenterEvent(api_url){
        this.props.navigator.push({
            component:HomeShopCenterDetail,
            // 参数必须是一个对象, 传递参数
            passProps:{api_url}
        });
    }
}

// 样式类
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    navStyle:{
        backgroundColor:'#ff6100',
        flexDirection:'row',
        // 侧轴居中
        alignItems:'center',
        justifyContent:'space-around',

        height:44
    },

    navImageStyle:{
        width:24,
        height:24
    },

    textInputStyle:{
        width:width * 0.7,
        height:34,
        backgroundColor:'white',
        borderRadius:17
    }
});

// 输出组件
module.exports = Home;
