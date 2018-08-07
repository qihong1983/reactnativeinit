import React from 'react';
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
	WebView
} from 'react-native';


//antd库
import {
	Button,
	TabBar,
	SearchBar,
	WhiteSpace,
	WingBlank,
	NoticeBar
} from 'antd-mobile-rn';

import TabNavigator from 'react-native-tab-navigator';


export default class Index extends React.Component {
	static navigationOptions = {
		title: '首页',
		headerLeft: null,
		headerMode: 'none'
	}
	constructor(props) {
		super(props);
	}

	render() {
		let tabBarHeight = 0;
		return (
			<View>


				<Text>首页</Text>
			</View>
		);
	}
}