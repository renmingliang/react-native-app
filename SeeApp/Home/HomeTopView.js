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

let Dimensions = require('Dimensions');
let {width, height, scale} = Dimensions.get('window');

//引入homeListView
import HomeListView from './HomeListView';

// 组件类
export default class HomeTopView extends Component {
    //原型属性
    static propTypes = {
        dataArr : PropTypes.array
    };
    static defaultProps = {
    };
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectedPage : 0
        };
    }
    render(){
        return(
            <View style={styles.viewStyle}>
                {/*上部分*/}
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={(e)=>this.pageScrollEnd(e)}
                >
                    {this.renderScrollImage()}
                </ScrollView>
                {/*下部分对应状态*/}
                <View style={styles.bottomViewStyle}>
                    {this.renderIndicator()}
                </View>
            </View>
        )
    }
    renderScrollImage(){
        // 组件数组
        let itemArr = [];
        // 数据数组
        let dataArr = this.props.dataArr;
        // 遍历
        for (var i = 0; i < dataArr.length; i++) {
            // 取出单个数据对象
            let data = dataArr[i];
            // 创建组件装入数组
            itemArr.push(
                <HomeListView key={i} dataArr={data}/>
            );
        }
        // 返回组件数组
        return itemArr;
    }
    renderIndicator(){
        // 组件数组
        let itemArr = [];
        // 数据数组
        let dataArr = this.props.dataArr;
        // 遍历
        for (var i = 0; i < dataArr.length; i++) {
            // 设置选中的样式
            var style = (i == this.state.selectedPage) ? {color:'orange'} : {color:'gray'};
            // 取出单个数据对象
            let data = dataArr[i];
            // 创建组件装入数组
            itemArr.push(
                <Text style={[{fontSize:28}, style]} key={i}>&bull;</Text>
            );
        }
        // 返回组件数组
        return itemArr;
    }
    //当一页滚动结束时
    pageScrollEnd(e){
        //求出偏移量
        let currentPage = e.nativeEvent.contentOffset.x / width;
        //更新状态机
        this.setState({
            selectedPage:currentPage
        });
    }

}

// 样式类
const styles = StyleSheet.create({
    viewStyle:{
        backgroundColor:'white'
    },

    bottomViewStyle:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    }
});

// 输出组件
module.exports = HomeTopView;
