//react基础库
import React, {
    Component
} from 'react';

//react-native 原生组件
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    AppRegistry,
    Alert,
    StatusBar,
    ScrollView,
    WebView,
    Navigator
} from 'react-native';

//redux方法绑定
import {
    bindActionCreators
} from 'redux';

import {
    connect
} from 'react-redux';

//antd库
import {
    Button,
    TabBar,
    SearchBar,
    WhiteSpace,
    WingBlank,
    NoticeBar
} from 'antd-mobile-rn';


//国际化
import {
    i18n
} from '../i18n/index';


//列子的actions方法
import * as actionCreators from '../actions/GetWeatherAction';

//echarts图表
import Echarts from 'native-echarts';



import TabNavigator from 'react-native-tab-navigator';
//获取屏幕宽高库
import Dimensions from 'Dimensions';
const {
    width,
    height
} = Dimensions.get('window');

//首页todo

import Home from './Home';

//币币交易todo 

//点对点交易

//个人中心
import UserCenter from './UserCenter';


class Main extends Component {


    static navigationOptions = ({
        navigation,
        screenProps
    }) => {

        return {
            header: null,

        }
    }


    constructor(props) {
        super(props);
        //设置状态
        this.state = {
            selectedTab: 'home',
        };
    }

    componentWillMount() {
        console.log('这里这里');
        this.props.tabBarStatus(true);
    }

    tabClickProfile = (e) => {

        console.log(this.props.GetWeatherReducer);
        this.setState({
            selectedTab: e
        });
    }

    render() {

        console.log(this.props, 'this.props');
        console.log(this.props.GetWeatherReducer.tabBarStatus, 'this.props.GetWeatherReducer.tabBarStatus');
        return (
            <TabNavigator hidesTabTouch={true} swipeEnabled={true}  tabBarStyle={this.props.GetWeatherReducer.tabBarStatus}
              sceneStyle={{ paddingBottom: 'auto' }}>
                <TabNavigator.Item  
                  selected={this.state.selectedTab === 'home'}  
                  title="首页"  
                  onPress={() => this.tabClickProfile('home')}>  
                  <Home navigation={this.props.navigation}/>
            </TabNavigator.Item>

            <TabNavigator.Item  
                selected={this.state.selectedTab === 'userCenter'}
                title="个人中心"  
                onPress={() => this.tabClickProfile('userCenter') }>
              <UserCenter navigation={this.props.navigation} />
            </TabNavigator.Item>
        </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    TabHide: {
        height: 0,
        overflow: 'hidden'
    },
    TabShow: {}
});

const mapStateToProps = (state) => {
    return {
        GetWeatherReducer: state.getWeather
    }
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
    //全量
    return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);