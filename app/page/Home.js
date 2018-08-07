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



import Index from './Index';



export default class Home extends React.Component {

	// static navigationOptions = ({
	// 	navigation,
	// 	screenProps,
	// 	title
	// }) => {
	// 	console.log(title, 'title');
	// 	return {
	// 		// header: (<Header navigation={navigation} title='登录' />)

	// 				title: '首页',
	// 		headerLeft: null,
	// 		headerMode: 'none'
	// 	}
	// }




	goHome = () => {
		this.props.navigation.navigate('ForgetPassword');
	}

	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props, 'HomeNav');
		return (
			<View style={{paddingTop:20}}>
				<Text onPress={()=>{this.goHome()}}>首页</Text>
			</View>
		);
	}
}