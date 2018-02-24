/**
 * Created by Administrator on 2016/11/14.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

//引入其他组件
import Home from './../Home/Home';
import Shop from './../Shop/Shop';
import Mine from './../Mine/Mine';
import More from './../More/More';

// 组件类
export default class Main extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectedTabItem:'home'
        };
      }
    render() {
        return (
            <TabNavigator>
                {/*首页*/}
                {this.renderTabItem('首页', 'icon_tabbar_homepage', 'icon_tabbar_homepage_selected', 'home', false,  <Home  {...this.props}/>)}
                {/*商家*/}
                {this.renderTabItem('商家', 'icon_tabbar_merchant_normal', 'icon_tabbar_merchant_selected', 'shop', false,  <Shop  {...this.props} />)}
                {/*我的*/}
                {this.renderTabItem('我的', 'icon_tabbar_mine', 'icon_tabbar_mine_selected', 'mine', true,  <Mine  {...this.props} />)}
                {/*更多*/}
                {this.renderTabItem('更多', 'icon_tabbar_misc', 'icon_tabbar_misc_selected', 'more', false,  <More  {...this.props} />)}
            </TabNavigator>
        );
    }
    //子tabItem
    renderTabItem(title,renderIcon,renderSelectedIcon,selectedTabItem,isRenderBadge,component){
        return(
            <TabNavigator.Item
                title={title}
                selectedTitleStyle={{color:'orange'}}
                renderIcon={() => <Image source={{uri:renderIcon}} style={styles.tabIconStyle}/>}
                renderSelectedIcon={() => <Image source={{uri: renderSelectedIcon}} style={styles.tabIconStyle}/>}
                selected={this.state.selectedTabItem === selectedTabItem}
                onPress={()=>{this.setState({
                            selectedTabItem:selectedTabItem
                        })}}
                renderBadge={()=>this.renderBadge(isRenderBadge)}
            >
                {component}
            </TabNavigator.Item>
        )
    }
    // 自定义气泡
    renderBadge(isRenderBadge){
        if(!isRenderBadge)return;
        return(
            <View style={{width:14, height:14, backgroundColor:'red', justifyContent:'center', alignItems:'center', borderRadius:7, marginTop:5}}>
                <Text style={{color:'white'}}>8</Text>
            </View>
        )
    }
}

// 样式类
const styles = StyleSheet.create({
    tabIconStyle:{
        width:28,
        height:28
    }
});

// 输出组件
module.exports = Main;
