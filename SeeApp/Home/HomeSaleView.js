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
    View
} from 'react-native';

//引入cell单个对象组件
import HomeCommonCell from './HomeCommonCell';

// 组件类
export default class HomeSaleView extends Component {
    static propTypes = {
        dataArr:PropTypes.array
    };
    static defaultProps = {
    };
    render() {
        return (
            <View style={styles.container}>
                {this.renderItem()}
            </View>
        );
    }
    renderItem(){
        // 组件数组
        let itemArr = [];
        // 数据数组
        let dataArr = this.props.dataArr;
        // 遍历
        for (var i = 0; i < dataArr.length; i++) {
            // 取出单个数据对象
            let data = dataArr[i];
            // 转化数据对象
            let tempData ={
                "title" :data.maintitle,
                "subTitle" : data.deputytitle,
                "rightImage" : this.dealWithImageUrl(data.imageurl),
                "titleColor": data.typeface_color
            };
            // 创建组件装入数组
            itemArr.push(
                <HomeCommonCell dataObj={tempData} key={i} {...this.props}/>
            );
        }
        // 返回组件数组
        return itemArr;
    }
    //处理图像url地址
    dealWithImageUrl(url){
        let replaceStr = 'w.h';
        if(url.search(replaceStr) !== -1){//找到
            return url.replace(replaceStr,'90.90');
        }else{//没有
            return url;
        }
    }
}

// 样式类
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:15,
        flexDirection:'row',
        flexWrap:'wrap'
    }
});

// 输出组件
module.exports = HomeSaleView;
