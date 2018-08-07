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
import {
	actionGetWeather
} from '../actions/GetWeatherAction';

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
	Card
} from 'antd-mobile-rn';
// InputItem, List

//redux方法绑定
import {
	bindActionCreators
} from 'redux';


//列子的actions方法
import * as actionCreators from '../actions/GetWeatherAction';


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
		// this.props.tabBarStatus(false);
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

	render() {
		const {
			type
		} = this.state;
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
						            onChange={(v) => { /*console.log('onChange', v);*/ }}
						        > 
						        </InputItem>
							</List.Item>
							<List.Item thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png">
					  			<InputItem
					            type={'password'}
					            placeholder="请输入密码"
					            clear
					            onChange={(v) => { /*console.log('onChange', v);*/ }}
					          >
					          </InputItem>
							</List.Item>
							<List.Item >
								<Button type="primary">登录</Button>
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
		GetWeatherReducer: state.getWeather
	}
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
	//全量
	return bindActionCreators(actionCreators, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);