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
    TouchableOpacity,
    Switch
} from 'react-native';

// 组件类
export default class CommonCell extends Component {
    static propTypes = {
        leftTitle:PropTypes.string,
        isSwitch:PropTypes.bool,
        rightTitle:PropTypes.string,
        leftImageName:PropTypes.string,
        rightImageName:PropTypes.string
    };

    static defaultProps = {
    };

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            switchOn:false
        };
      }
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={()=>this.dealWithPress()}>
                {/*左边*/}
                {this.renderLeftView()}
                {/*右边*/}
                {this.renderRightView()}
            </TouchableOpacity>
        );
    }
    renderLeftView(){
        return(
            <View  style={styles.leftViewStyle}>
                <Image source={{uri: this.props.leftImageName}}  style={styles.leftImgStyle}/>
                <Text>{this.props.leftTitle}</Text>
            </View>
        )
    }
    renderRightView(){
        var temp;
        if(this.props.isSwitch){
            temp = <Switch value={this.state.switchOn} onValueChange={()=>this.setState({
                switchOn:!this.state.switchOn
            })}/>
        }else{
            var temp2;
            if(this.props.rightTitle){
                temp2 = <Text style={{marginRight:3, color:'gray'}}>{this.props.rightTitle}</Text>
            }else if(this.props.rightImageName){
                temp2 = <Image source={{uri: this.props.rightImageName}} style={{width:24, height:13}}/>
            }

            temp = <Image source={{uri:'icon_cell_rightarrow'}} style={{width:8, height:13}}/>
        }

        return(
            <View style={styles.rightViewStyle}>
                {temp2}
                {temp}
            </View>
        )
    }

    dealWithPress(){
        alert('点了');
    }
}

// 样式类
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height:40,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',

        borderBottomColor:'#e8e8e8',
        borderBottomWidth:1
    },
    leftViewStyle:{
        marginLeft:8,
        flexDirection:'row',
        alignItems:'center'
    },
    leftImgStyle:{
        width:24,
        height:24,
        borderRadius:12,
        marginRight:5
    },
    rightViewStyle:{
        marginRight:8,
        flexDirection:'row',
        alignItems:'center'
    }
});

// 输出组件
module.exports = CommonCell;
