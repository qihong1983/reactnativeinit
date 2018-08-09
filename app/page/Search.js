import React, {
	Component
} from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	TextInput,
	ScrollView
} from 'react-native';

import {
	connect
} from 'react-redux';

//列子的actions方法
let actionCreators = null;
import * as CommonActions from '../actions/Common/Common';
import * as GetWeatherActions from '../actions/GetWeatherAction';
import * as LoginActions from '../actions/Login/Login';
actionCreators = Object.assign({}, GetWeatherActions, LoginActions, CommonActions);


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
	Toast
} from 'antd-mobile-rn';
// InputItem, List

//redux方法绑定
import {
	bindActionCreators
} from 'redux';


//列子的actions方法
// import * as actionCreators from '../actions/GetWeatherAction';

import Header from '../components/Login/Header';

//获取屏幕宽高库
import Dimensions from 'Dimensions';

const {
	width,
	height
} = Dimensions.get('window');

class Search extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ScrollView>
				<View>
					<Text>搜索页</Text>
				</View>
			</ScrollView>
		);
	}
}


const mapStateToProps = (state) => {
	return {
		GetWeatherReducer: state.getWeather,
		Login: state.Login,
		Common: state.Common,
		Main: state.Main
	}
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
	//全量
	return bindActionCreators(actionCreators, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(Search);