/**
 * Created by Administrator on 2016/11/17.
 */
/**
 * Created by Administrator on 2016/11/14.
 */
import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';

let Dimensions = require('Dimensions');
let {width, height, scale} = Dimensions.get('window');

//计算间距
let cols = 5;
let viewW = 70;
let marginX = (width - cols * viewW) / (cols + 1);

// 组件类
export default class HomeListView extends Component {
    static propTypes = {
        dataArr: PropTypes.array
    };
    static defaultProps = {
    };
    // 构造
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged:(r1,r2)=> r1 !==r2
        });
        // 初始状态
        this.state = {
            dataSource : ds.cloneWithRows(this.props.dataArr)
        };
    }
    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={styles.listViewStyle}
            />
        );
    }
    //隐式传参
    renderRow(rowData){
        return(
            <TouchableOpacity style={styles.cellStyle} onPress={()=>alert(rowData.title)}>
                <Image source={{uri: rowData.image}} style={{width:40, height:40}}/>
                <Text>{rowData.title}</Text>
            </TouchableOpacity>
        )
    }

}

// 样式类
const styles = StyleSheet.create({
    listViewStyle:{
        flexDirection:'row',
        flexWrap:'wrap',
        width:width
    },
    cellStyle:{
        width:viewW,
        height:viewW + 5,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:marginX
    }
});

// 输出组件
module.exports = HomeListView;
