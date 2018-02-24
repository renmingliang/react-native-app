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
    ListView,
    Image,
} from 'react-native';

let Dimensions = require('Dimensions');
let {width, height, scale} = Dimensions.get('window');

// 组件类
export default class HomeGuessYouLikeListView extends Component {
    static propTypes = {
        api_url:PropTypes.string
    };

    static defaultProps = {
        api_url:'http://api.meituan.com/group/v2/recommend/homepage/city/20?userId=160495643&userid=160495643&__vhost=api.mobile.meituan.com&position=23.134643%2C113.373951&movieBundleVersion=100&utm_term=6.6&limit=40&wifi-mac=64%3A09%3A80%3A10%3A15%3A27&ci=20&__skcy=X6Jxu5SCaijU80yX5ioQuvCDKj4%3D&__skua=5657981d60b5e2d83e9c64b453063ada&__skts=1459731016.350255&wifi-name=Xiaomi_1526&client=iphone&uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&__skno=FEB757F5-6120-49EC-85B0-D1444A2C2E7B&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_source=AppStore&utm_medium=iphone&version_name=6.6&wifi-cur=0&wifi-strength=&offset=0&utm_campaign=AgroupBgroupD100H0&__skck=3c0cf64e4b039997339ed8fec4cddf05&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594'
    };
    // 构造
    constructor(props) {
        super(props);

        // 传递this
        this.renderRow = this.renderRow.bind(this);

        var ds =  new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        // 初始状态
        this.state = {
            dataSource:ds.cloneWithRows([''])
        };
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            />
        );
    }

    renderRow(rowData){
        return(
            <View style={styles.cellStyle}>
                <Image source={{uri:this.dealWithImageUrl(rowData.imageUrl)}}  style={styles.cellImgStyle}/>
                <View style={{justifyContent:'space-around', flex:1}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text numberOfLines={1} style={{width:width * 0.4}}>{rowData.title}</Text>
                        <Text>{rowData.topRightInfo}</Text>
                    </View>
                    <Text  numberOfLines={2}>{rowData.subTitle}</Text>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text>{rowData.mainMessage}{rowData.mainMessage2}</Text>
                        <Text>{rowData.bottomRightInfo}</Text>
                    </View>
                </View>
            </View>
        )
    }

    // 异步方法
    componentDidMount() {
        // 发送网络请求
        fetch(this.props.api_url)
            .then((response) => response.json())
            .then((responseJson) => {
                var dataArr = responseJson.data;
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(dataArr)
                });
            })
            .catch((error) => {
                alert('当前网络有问题哟~');
            })
    }

    // 处理图像的url地址
    dealWithImageUrl(url){
        // 判断
        if(!url) return;
        let replaceString = 'w.h';
        if(url.search(replaceString) !== -1){ // 有
            return url.replace(replaceString, '90.90');
        }else{
            return url;
        }
    }
}

// 样式类
const styles = StyleSheet.create({
    cellStyle:{
        flexDirection:'row',
        padding:8,
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:1
    },
        cellImgStyle:{
        width:120,
        height:90,
        marginRight:5,
        borderRadius:8
    }
});

// 输出组件
module.exports = HomeGuessYouLikeListView;
