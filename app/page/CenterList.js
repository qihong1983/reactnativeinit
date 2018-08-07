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

import {
	connect
} from 'react-redux';
import {
	actionGetWeather
} from '../actions/GetWeatherAction';

//redux方法绑定
import {
	bindActionCreators
} from 'redux';

//antd库
import {
	Button,
	TabBar,
	SearchBar,
	WhiteSpace,
	WingBlank,
	NoticeBar
} from 'antd-mobile-rn';


import Header from '../components/Login/Header';
//列子的actions方法
import * as actionCreators from '../actions/GetWeatherAction';


class CenterList extends React.Component {
	static navigationOptions = ({
		navigation,
		screenProps,
		title
	}) => {
		console.log(title, 'title');
		return {
			header: (<Header navigation={navigation} title='linux' />)
		}
	}
	constructor(props) {
		super(props);
	}

	componentWillMount() {


		this.props.tabBarStatus(true);
	}

	onLogin = (e) => {
		console.log(e);
		console.log(this);
		this.props.navigation.push("Login");
		console.log('logoin');
	}

	componentDidUpdate() {
		console.log(this);
		debugger;
		// this.props.tabBarStatus(true);

	}

	render() {

		console.log(this.props, 'this.props');
		return (
			<View>
				<Button onClick={()=>this.onLogin()}>点击登录11</Button>
				<Button>资金管理</Button>
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


export default connect(mapStateToProps, mapDispatchToProps)(CenterList);