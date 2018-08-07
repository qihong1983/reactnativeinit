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

// import {
// 	actionGetWeather
// } from '../actions/GetWeatherAction';


//列子的actions方法
let actionCreators = null;
import * as CommonActions from '../actions/Common/Common';
import * as GetWeatherActions from '../actions/GetWeatherAction';
import * as LoginActions from '../actions/Login/Login';

actionCreators = Object.assign({}, GetWeatherActions, LoginActions, CommonActions);

import TabNavigator from 'react-native-tab-navigator';

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

class Login extends Component {

	static navigationOptions = ({
		navigation,
		screenProps,
		title
	}) => {
		// console.log(title, 'title');
		return {
			// header: (<Header navigation={navigation} title='登录' />)
			headerTitle: '登录',
			headerBackTitle: null
		}
	}

	constructor(props) {
		super(props);
		this.state = {
			value: '',
			value1: '',
			value2: '',
			value3: '',
			value4: '',
			labelnum1: '',
			labelnum2: '',
			labelnum3: '',
			text: '',
			bankCard: '',
			phone: '',
			password: '',
			number: '',
			type: 'momey'
		};
	}

	componentWillMount() {
		this.props.initForm();
	}

	showFooter() {
		return (
			<View>
				<Text style={{color:'white'}}>页脚</Text>
			</View>
		)
	}

	register = () => {
		this.props.navigation.navigate('Register');
	}

	forgetPassword = () => {
		this.props.navigation.navigate('ForgetPassword');
	}

	/**
	 * 输入用户名
	 * @method inputUserName
	 * @param v {String}
	 */
	inputUserName = (v) => {
		this.props.inputUserName(v);
	}

	/**
	 * 输入密码
	 * @method inputPassword
	 * @param data {String}
	 */
	inputPassword = (data) => {
		this.props.inputPassword(data);
	}

	/**
	 * 登录操作
	 */
	onSubmit = () => {

		console.log(this.props, 'this.props');

		if (this.props.Login.username == '') {
			Toast.fail('请输入帐号');
			return;
		}

		if (this.props.Login.password == '') {
			Toast.fail('请输入密码');
			return;
		}

		var data = {
			client_id: this.props.Login.client_id,
			client_secret: this.props.Login.client_secret,
			username: this.props.Login.username,
			password: this.props.Login.password
		}

		this.props.onSubmit(data, this.props.navigation);
	}


	render() {
		// const {
		// 	type
		// } = this.state;

		console.log(this.props, 'this.props');

		return (
			<ScrollView >
		  		<WhiteSpace size="md"/>
          		<Card full >
		            <Card.Header
		              title={this.showFooter()}
		              thumbStyle={{ width: 30, height: 30 }}
		              thumb="https://m.imx.com/static/img/titleLogowhite.0068420.png"
		            />
					<Card.Body>
						<List>
							<List.Item thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png">
						  		<InputItem
						            type={'text'}
						            placeholder="请输入帐号"
						            clear
						            onChange={(v) => { this.inputUserName(v) }}
						        > 
						        </InputItem>
							</List.Item>
							<List.Item thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png">
					  			<InputItem
					            type={'password'}
					            placeholder="请输入密码"
					            clear
					            onChange={(v) => { this.inputPassword(v) }}
					          >
					          </InputItem>
							</List.Item>
							<List.Item >
								<Button type="primary" onClick={() => {this.onSubmit()}}>登录</Button>
							</List.Item>
							<List.Item >
								<View >
									<Text onPress={()=> {this.register()}}>立即注册</Text>
									<Text onPress={()=> {this.forgetPassword()}}>忘记密码</Text>
								</View>
							</List.Item>
						</List>
					</Card.Body>
				</Card>
            </ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	bgView: {
		// flex: 1,
		// justifyContent: 'flex-start',
		// alignItems: 'center',
		// backgroundColor: '#FFFFFF'
		backgroundColor: '#1c1f42'
	},
	touchableView: {
		margin: 6,
	},
	buttonView: {
		width: 100,
		height: 40,
		backgroundColor: "#0000FF",
		borderRadius: 5,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

const mapStateToProps = (state) => {
	return {
		GetWeatherReducer: state.getWeather,
		Login: state.Login,
		Common: state.Common
	}
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
	//全量
	return bindActionCreators(actionCreators, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);