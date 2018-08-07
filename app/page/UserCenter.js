import React from 'react';
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
	WebView
} from 'react-native';

//antd库
import {
	TabBar,
	SearchBar,
	WhiteSpace,
	WingBlank,
	NoticeBar,
	Card,
	Button
} from 'antd-mobile-rn';

//redux方法绑定
import {
	bindActionCreators
} from 'redux';


import {
	connect
} from 'react-redux';

//列子的actions方法
import * as actionCreators from '../actions/GetWeatherAction';

//个人中心
import CenterList from './CenterList';

//登录
import Login from './Login';

// 注册
import Register from './Register';
// 找回密码
import ForgetPassword from './ForgetPassword';

import {
	StackNavigator
} from 'react-navigation';

//获取屏幕宽高库
import Dimensions from 'Dimensions';
const {
    width,
    height
} = Dimensions.get('window');

// const UserCenterNav = StackNavigator({
// 	CenterList: {
// 		screen: CenterList,
// 		gesturesEnabled: true,
// 		mode: 'modal',
// 		headerMode: 'screen'
// 	},
// 	Login: {
// 		screen: Login,
// 		gesturesEnabled: true,
// 		mode: 'modal',
// 		headerMode: 'screen',
// 		headerLeft: (
// 			<Button
// 		        onPress={() => {
// 		        	console.log(this, 'thisthis');
// 		        	 // this.props.tabBarStatus(true);
// 		        	 // console.log(this.props.navigation.state.key);
// 		        	 // this.goBack();
// 		        }}
// 		        title="Info"
// 		        color="#fff"
// 		      />
// 		)
// 	},
// 	Register: {
// 		screen: Register,
// 		gesturesEnabled: true,
// 		mode: 'card',
// 		headerMode: 'screen'
// 	},
// 	ForgetPassword: {
// 		screen: ForgetPassword,
// 		gesturesEnabled: true,
// 		mode: 'card',
// 		headerMode: 'screen'
// 	}
// }, {
// 	initialRouteName: 'CenterList',
// 	gesturesEnabled: true
// });



class UserCenter extends React.Component {
	static navigationOptions = {
		title: '个人中心',
		headerLeft: null,
		headerMode: 'none'
	}
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		// this.props.tabBarStatus(true);
	}

	componentDidMount() {
		// console.log(11122);
	}

	onLogin = () => {
		// console.log(this);
		 		this.props.navigation.push("Login");
		// console.log(this.props, 'this.props');
		// console.log('logoin');
	}

	render() {

		// this.props.tabBarStatus(true);
		return (
			<View style={{paddingTop:20}}>
						

 			<Card full >
				<Card.Body>
					<Button type="primary" onClick={() => {this.onLogin()}}>点击登录13122</Button>
				</Card.Body>
			</Card>
				
			</View>
			 
		);
	}
}


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

export default connect(mapStateToProps, mapDispatchToProps)(UserCenter);