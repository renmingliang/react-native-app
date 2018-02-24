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
    Image,
    TouchableOpacity
} from 'react-native';

let Dimensions = require('Dimensions');
let {width, height, scale} = Dimensions.get('window');

//跳转子级页面
import HomeDetail from './HomeDetail';

// 组件类
export default class HomeCommonCell extends Component {
    static propTypes = {
        dataObj: PropTypes.object
    };
    static defaultProps = {
    };
    render() {
        // 取出数据
        var data = this.props.dataObj;
        return (
            <TouchableOpacity style={styles.container} onPress={()=>this.dealWithPress()}>
                <View style={{marginLeft:5}}>
                    <Text style={{color:data.titleColor, fontSize:18}}>{data.title}</Text>
                    <Text
                        style={{color:'gray', fontSize:12,marginTop:3}}
                        numberOfLines={1}
                    >
                        {data.subTitle}
                    </Text>
                </View>
                <Image source={{uri:data.rightImage}} style={styles.imgStyle}/>
            </TouchableOpacity>
        );
    }
    dealWithPress(){
        // 判断导航条是否存在
        if(!this.props.navigator) return;
        this.props.navigator.push({
            component:HomeDetail
        });
    }
}

// 样式类
const styles = StyleSheet.create({
    container: {
        width:width * 0.5-1,
        height:59,
        backgroundColor: 'white',
        flexDirection:'row',
        marginBottom:1,
        marginRight:1,
        justifyContent:'space-around',
        alignItems:'center'
    },
    imgStyle:{
        width:80,
        height:60,
        resizeMode:'contain',
        marginRight:5
    }

});

// 输出组件
module.exports = HomeCommonCell;
