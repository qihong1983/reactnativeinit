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
	WebView,
	TouchableOpacity
} from 'react-native';


//antd库
import {
	Button,
	TabBar,
	SearchBar,
	WhiteSpace,
	WingBlank,
	NoticeBar,
	List,
	InputItem,
	Icon,
	Grid,
	Card,
	Picker,
	SegmentedControl
} from 'antd-mobile-rn';

import {
	connect
} from 'react-redux';


//redux方法绑定
import {
	bindActionCreators
} from 'redux';

//列子的actions方法
import * as actionCreators from '../../actions/GetWeatherAction';
//获取屏幕宽高库
import Dimensions from 'Dimensions';
const {
	width,
	height
} = Dimensions.get('window');

// InputItem, List
class Header extends React.Component {

	constructor(props) {
		super(props);
	}

	setTabBar = () => {
		console.log(this, 'this');
		this.props.navigation.goBack();
		this.props.tabBarStatus(true);
	}

	render() {
		return (
			<View style={{width:width, height:60, backgroundColor: 'yellow', color: 'red', display: 'flex', verticalAlign: 'middle', justifyContent: 'space-between', alignItems: 'flex-start', flexDirection: 'row', alignSelf: 'center'}}>
				<View style={{float:'left', paddingTop:20}}>
					<Text onPress={() => {this.setTabBar()}}>返回</Text>
				</View>
				<View style={{float:'right',paddingTop:20}}>
					<Text>{this.props.title}</Text>
				</View>
								<View style={{float:'right',paddingTop:20}}>
					<Text>{this.props.title}</Text>
				</View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
