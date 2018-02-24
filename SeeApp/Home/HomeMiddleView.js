/**
 * Created by Administrator on 2016/11/17.
 */
/**
 * Created by Administrator on 2016/11/14.
 */
import React, { Component ,PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

//引入单个cell对象组件
import HomeCommonCell from './HomeCommonCell';

let Dimensions = require('Dimensions');
let {width, height, scale} = Dimensions.get('window');

// 组件类
export default class HomeMiddleView extends Component {
    static propTypes = {
        dataObj: PropTypes.object
    };
    static defaultProps = {
    };
    render(){
        //取出左边数据
        var leftData = this.props.dataObj.dataLeft[0];
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.leftViewStyle}>
                    <Image source={{uri:leftData.img1}} style={styles.imgStyle}/>
                    <Image source={{uri:leftData.img2}} style={styles.imgStyle}/>
                    <Text>{leftData.title}</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text>{leftData.price}</Text>
                        <Text>{leftData.sale}</Text>
                    </View>
                </TouchableOpacity>
                <View>
                    {this.renderRightView()}
                </View>
            </View>
        )
    }
    //右边数据处理
    renderRightView(){
        // 组件数组
        let itemArr = [];
        // 数据数组
        let dataArr = this.props.dataObj.dataRight;
        // 遍历
        for (var i = 0; i < dataArr.length; i++) {
            // 取出单个数据对象
            let data = dataArr[i];
            // 创建组件装入数组
            itemArr.push(
                <HomeCommonCell dataObj={data} key={i}/>
            );
        }
        // 返回组件数组
        return itemArr;
    }

}

// 样式类
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:15,
        flexDirection:'row'
    },

    leftViewStyle:{
        width:width*0.5,
        backgroundColor:'#fff',
        height:119,
        marginRight:1,

        justifyContent:'space-around',
        alignItems:'center'
    },

    imgStyle:{
        width:80,
        height:30,
        resizeMode:'contain'
    }
});

// 输出组件
module.exports = HomeMiddleView;
