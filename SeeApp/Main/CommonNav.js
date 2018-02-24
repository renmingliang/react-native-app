/**
 * Created by Administrator on 2016/11/14.
 */
import React, { Component, PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image,
    TouchableOpacity
} from 'react-native';

// 组件类
export default class CommonNav extends Component {
    static propTypes = {
        title:PropTypes.string,
        leftIconName:PropTypes.string,
        rightIconName:PropTypes.string
    };

    static defaultProps = {
    };

    render() {
        return (
            <View style={styles.navStyle}>
                {/*左边*/}
                <TouchableOpacity onPress={()=>this.dealWithPress()} style={{flexDirection:'row', marginLeft:8}}>
                    <Image source={{uri:this.props.leftIconName}} style={styles.navImageStyle}/>
                </TouchableOpacity>
                {/*中边*/}
                <View>
                    <Text style={{fontSize:18,fontWeight:'bold',color:'white'}}>{this.props.title}</Text>
                </View>
                {/*右边*/}
                <View style={{flexDirection:'row', marginRight:8}}>
                    <Image source={{uri:this.props.rightIconName}} style={styles.navImageStyle}/>
                </View>
            </View>
        );
    }

    dealWithPress(){
        alert('点了左边');
    }
}

// 样式类
const styles = StyleSheet.create({
    navStyle:{
        backgroundColor:'#ff6100',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        height:44,
        //识别系统，做不同的样式
        paddingTop:Platform.OS === 'ios'? 20 : 0
    },
    navImageStyle:{
        width:24,
        height:24
    }
});

// 输出组件
module.exports = CommonNav;
