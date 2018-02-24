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

var mineDataArr = require('./MineOrderData.json');

let Dimensions = require('Dimensions');
let {width, height, scale} = Dimensions.get('window');

// 组件类
export default class MineHeadView extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*上部分*/}
                <TouchableOpacity style={styles.topViewStyle}>
                    <Image source={{uri: 'see'}} style={{width:80, height:80, borderRadius:40}}/>
                    <View style={{flexDirection:'row', width: width * 0.65, alignItems:'center'}}>
                        <Text style={{color:'white', fontSize:18}}>小鬼BIG</Text>
                        <Image source={{uri: 'avatar_enterprise_vip'}} style={{width:26, height:26}}/>
                    </View>
                    <Image source={{uri: 'icon_cell_rightarrow'}} style={{width:8, height:13}}/>
                </TouchableOpacity>
                {/*下部分*/}
                <View style={styles.bottomViewStyle}>
                    {this.renderItem(mineDataArr)}
                </View>
            </View>
        );
    }
    renderItem(mineDataArr){
        let itemArr = [];
        let dataArr = mineDataArr;
        for(var i=0; i<dataArr.length; i++){
            let data = dataArr[i];
            itemArr.push(
                <ItemView data={data} key={i}/>
            );
        }
        return itemArr;
    }

}
/*------自定义组件------------------------*/
class ItemView  extends Component {
    static propTypes = {
        data:PropTypes.object
    };

    static defaultProps = {
    };
    render(){
        return(
            <TouchableOpacity style={styles.bottomItemStyle} >
                <Text style={{color:'white'}}>{this.props.data.number}</Text>
                <Text style={{color:'white'}}>{this.props.data.title}</Text>
            </TouchableOpacity>
        )
    }
}
// 样式类
const styles = StyleSheet.create({
    container: {
        height:200,
        backgroundColor: '#ff6100'
    },
    topViewStyle:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginTop:40
    },
    bottomViewStyle:{
        flexDirection:'row',
        backgroundColor:'rgba(255,255,255,.5)',
        height:44,

        position:'absolute',
        left:0,
        bottom:0,
        width:width,

        paddingTop:5,
        paddingBottom:5
    },

    bottomItemStyle:{
        width: width / 3 + 1,
        justifyContent:'center',
        alignItems:'center',
        borderRightColor:'white',
        borderRightWidth:1
    }
});

// 输出组件
module.exports = MineHeadView;
