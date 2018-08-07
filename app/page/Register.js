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
	SegmentedControl,
	Toast
} from 'antd-mobile-rn';
// InputItem, List

import {
	connect
} from 'react-redux';


//redux方法绑定
import {
	bindActionCreators
} from 'redux';

//列子的actions方法
let actionCreators = null;
import * as GetWeatherActions from '../actions/GetWeatherAction';
import * as RegisterActions from '../actions/Register/Register';

actionCreators = Object.assign({}, GetWeatherActions, RegisterActions);

import {
	district
} from 'antd-mobile-demo-data';


const CustomChildren = (props: any) => (
	<TouchableOpacity onPress={props.onClick}>
    <View
      style={{ height: 36, paddingLeft: 15, flexDirection: 'row', alignItems: 'center' }}
    >
      <Text style={{ flex: 1 }}>{props.children}</Text>
      <Text style={{ textAlign: 'right', color: '#888', marginRight: 15 }}>{props.extra}</Text>
    </View>
  </TouchableOpacity>
);

class Register extends React.Component {

	static navigationOptions = ({
		navigation,
		screenProps
	}) => {
		return {
			title: '注册用户',
			mode: 'modal',
			headerBackTitle: '返回'
		}
	}

	onClick = () => {
		setTimeout(() => {
			this.setState({
				data: district,
			});
		}, 500);
	}

	constructor(props) {
		super(props);

		this.state = {
			pickerValue: [],
			value: []
		}

		this.timer = null;
	}

	componentWillMount() {
		//初始化
		this.props.ResetForm();

		//拉国籍信息
		this.props.getCountryInfo();


	}

	componentDidMount() {



		//停掉定时器
		clearInterval(this.timer);
		this.timer = null;
	}

	onChange = (e) => {
		this.props.ChangeType(e.nativeEvent.selectedSegmentIndex);
	}

	changeMobilePrefix = () => {



		let mobilePrefix = '+86';

		this.props.Register.country_data.map((v, k) => {
			if (this.props.Register.country_id.join('') == v.id.toString()) {
				mobilePrefix = v.mobile_prefix;
			}
		});



		this.props.changeMobilePrefix(mobilePrefix);
	}

	onChangePicker = async (value) => {

		await this.props.onChangePicker(value);

		await this.changeMobilePrefix();
	}

	onValueChange = (value) => {}

	showFooter() {
		return (
			<View>
				<Text style={{color:'white'}}>页脚</Text>
			</View>
		)
	}


	changePhone = async (v) => {

		await this.props.changePhone(v);
	}

	//切换手机邮箱
	renderPhone = () => {

		var componentPhone = null;


		if (this.props.Register.type == 'mobile') {
			componentPhone = (<List.Item thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png">
		  		<InputItem
		            type={'phone'}
		            placeholder="手机号码"
		            value={this.props.Register.mobile}
		            clear
		            onChange={(v) => { this.changePhone(v) }}
		            extra={this.props.Register.number_area}
		        > 
		        </InputItem>
			</List.Item>)
		} else {
			componentPhone = (<List.Item thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png">
		  		<InputItem
		            type={'phone'}
		            placeholder="邮箱地址"
		            clear
		            onChange={(v) => { /*console.log('onChange', v);*/ }}
		        > 
		        </InputItem>
			</List.Item>)
		}


		return componentPhone;
	}

	/**
	 * 转国家格式
	 * @method getCountryChangeFormat 
	 * @return {Array}
	 */
	getCountryChangeFormat() {

		let arr = [];
		this.props.Register.country_data.map((v, k) => {
			arr.push({
				value: v.id.toString(),
				label: v.name
			})
		});


		return arr;
	}

	/**
	 * 读秒
	 * @method readSecond
	 */
	readSecond = () => {

		//todo 测试
		var total = this.props.Register.valid_second;

		let second = 1;
		this.timer = setInterval(function() {
			total = total - second;
			this.props.readSecond(total);
			if (total == second) {
				this.props.stopSecond();
				clearInterval(this.timer);
			}
		}.bind(this), 1000)
	}

	clickExtra = async () => {

		var data = {
			country_id: parseInt(this.props.Register.country_id.join(''), 10),
			mobile: this.props.Register.mobile.replace(/\s/g, ""),
			receiver_type: this.props.Register.type,
			type: 0
		}
		await this.props.clickExtra(data);


		if (this.props.Register.valid_status) {
			this.readSecond()
		}

	}

	renderExtra = () => {

		let rendSecond = null;
		if (this.props.Register.valid_status) {
			rendSecond = (<Text style={{color:'#888888'}}>{this.props.Register.valid_text}</Text>);
		} else {
			rendSecond = (<Text onPress={()=>{this.clickExtra()}} style={{color:'#108ee9'}}>{this.props.Register.valid_text}</Text>);
		}

		return rendSecond;
	}


	/**
	 * 表单提交
	 * @method onSubmit
	 */
	onSubmit = () => {


		// 手机号为空
		if (this.props.Register.mobile == '') {
			Toast.fail('请输入手机号');
			return;
		}

		//todo: 验证码
		if (this.props.Register.code == '') {
			Toast.fail('请输入验证码');
			return;
		}

		//todo: 密码
		if (this.props.Register.password == '') {
			Toast.fail('请输入密码');
		} else {
			console.log(!/^(((?=.*[0-9])(?=.*[a-zA-Z])|(?=.*[0-9])(?=.*[^\s0-9a-zA-Z])|(?=.*[a-zA-Z])(?=.*[^\s0-9a-zA-Z]))[^\s]+)$/.test(this.props.Register.password));
			if (!/^(((?=.*[0-9])(?=.*[a-zA-Z])|(?=.*[0-9])(?=.*[^\s0-9a-zA-Z])|(?=.*[a-zA-Z])(?=.*[^\s0-9a-zA-Z]))[^\s]+)$/.test(this.props.Register.password)) {
				Toast.fail('密码格式错误');
				return;
			}
		}

		//todo: 确认密码

		if (this.props.Register.password !== this.props.Register.password_confirmation) {
			Toast.fail('两次输入不一致');
			return;
		}


		var data = {
			type: this.props.Register.type,
			mobile: this.props.Register.mobile.replace(/\s/g, ""),
			country_id: parseInt(this.props.Register.country_id.join(""), 10),
			email: this.props.Register.email,
			code: this.props.Register.code,
			password: this.props.Register.password,
			password_confirmation: this.props.Register.password_confirmation,
			invite_code: this.props.Register.invite_code,
			source: this.props.Register.source
		}

		console.log(data, 'data');

		this.props.onSubmit(data);


	}

	/**
	 * 输入inputPassword
	 * @method inputPassword
	 * @param v {String}
	 */
	inputPassword = (v) => {
		console.log('inputPassword: ', v);

		this.props.inputPassword(v);
	}


	/**
	 * 请确认密码
	 * @method okPassword
	 * @param v {String}
	 */
	okPassword = (v) => {
		console.log('okPassword: ', v);

		this.props.okPassword(v);
	}

	/**
	 * 请输入邀请码
	 * @method inputInviteCode
	 * @param v {String}
	 */

	inputInviteCode = (v) => {
		console.log('邀请码', v);
		this.props.inputInviteCode(v);
	}

	/**
	 * 请输入验证码
	 * @method inputCode
	 * @param v
	 */
	inputCode = (v) => {
		console.log(v);

		this.props.inputCode(v);
	}



	render() {

		return (
			<ScrollView style={styles.bgView}>
				<WhiteSpace size="md"/>
				<SegmentedControl 
					style={{height:40}}
					values={['手机注册', '邮箱注册']}
					onChange={this.onChange}
          			onValueChange={this.onValueChange}
				 />

				<WhiteSpace size="md"/>
				<Card full >
            		<Card.Header
		              title={this.showFooter()}
		              thumbStyle={{ width: 30, height: 30 }}
		              thumb="https://m.imx.com/static/img/titleLogowhite.0068420.png"
		            />
					<Card.Body>
						<List>
							<List.Item >
						  		<Picker
						            data={this.getCountryChangeFormat()}
						            cols={1}
						            value={this.props.Register.country_id}
						            onChange={this.onChangePicker}
						        >
						            <List.Item arrow="horizontal" last onClick={this.onClick}>
						             	选择国籍:
						            </List.Item>
						         </Picker>
							</List.Item>

							{/* 手机和邮箱 */}
							{this.renderPhone()}
							<List.Item thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png">
						  		<InputItem
						            type={'number'}
						            placeholder="请输入验证码"
						            clear
						            onChange={(v) => { this.inputCode(v) }}
						            extra={this.renderExtra()}
						        > 
						        </InputItem>
							</List.Item>
							<List.Item thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png">
					  			<InputItem
					            type={'password'}
					            placeholder="请输入密码"
					            clear
					            onChange={(v) => {this.inputPassword(v)}}
					          >
					          </InputItem>
							</List.Item>

							<List.Item thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png">
					  			<InputItem
					            type={'password'}
					            placeholder="请确认密码"
					            clear
					            onChange={(v) => {this.okPassword(v)}}
					          >
					          </InputItem>
							</List.Item>
							<List.Item thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png">
					  			<InputItem
					            type={'text'}
					            placeholder="邀请码（选填）"
					            clear
					            onChange={(v) => { this.inputInviteCode(v) }}
					          >
					          	
					          </InputItem>
							</List.Item>
							<List.Item >
								{/*<View >*/}
									<Text>密码需要由8-20位数字组成、字母或符号组成、至少两种</Text>
								{/*</View>*/}
							</List.Item>
							<List.Item >
								<Button type="primary" onClick={()=> {this.onSubmit()}}>完成</Button>
							</List.Item>
							<List.Item style={{paddingBottom: 150}}>
								<Text onPress={()=> this.props.navigation.goBack()}>已有帐户，去登录？</Text>
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
		Register: state.Register
	}
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
	//全量
	return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);