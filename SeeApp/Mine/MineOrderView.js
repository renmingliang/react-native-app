/**
 * Created by Administrator on 2016/11/16.
 */
/**
 * Created by Administrator on 2016/11/17.
 */
import React, { Component, PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

// 组件类
export default class MineOrderView extends Component {
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
        let itemArr = [];
        let dataArr = this.props.dataArr;
        for(var i=0; i<dataArr.length; i++){
            let data = dataArr[i];
            itemArr.push(
                <ItemView data={data} key={i}/>
            );
        }
        return itemArr;
    }

}
/*------------------------------*/
class ItemView  extends Component {
    static propTypes = {
        data:PropTypes.object
    };

    static defaultProps = {
    };

    render(){
        return(
            <TouchableOpacity style={styles.itemStyle} onPress={()=>alert(this.props.data.title)}>
                <Image source={{uri: this.props.data.icon}} style={styles.iconStyle}/>
                <Text>{this.props.data.title}</Text>
            </TouchableOpacity>
        )
    }
}
// 样式类
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

        flexDirection:'row',
        justifyContent:'space-around',

        paddingTop:6,
        paddingBottom:6
    },
    itemStyle:{
        justifyContent:'center',
        alignItems:'center'
    },
    iconStyle:{
        width:40,
        height:28
    }});

// 输出组件
module.exports = MineOrderView;
