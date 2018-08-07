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
// InputItem, List

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

export default class Register extends React.Component {

	static navigationOptions = ({
		navigation,
		screenProps
	}) => {
		return {
			title: '找回密码',
			headerBackTitle:null
		}
	}

	onClick = () => {
		// console.log('start loading data');
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
			value: [],
		}
	}

	onChange = (e) => {
		console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
	}

	onChangePicker = (value: any) => {
		// console.log(value);
		this.setState({
			value
		});
	}

	onValueChange = (value) => {
		console.log(value);
	}

	showFooter() {
		return (
			<View>
				<Text style={{color:'white'}}>页脚</Text>
			</View>
		)
	}

	goLogin = () => {
		this.props.navigation.navigate('Login');
	}

	render() {

		console.log(JSON.stringify(district), 'district');



		return (
			<ScrollView style={styles.bgView}>

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
				            placeholder="请输入邮箱或手机号"
				            clear
				            onChange={(v) => { console.log('onChange', v); }}
				        > 
				        </InputItem>
					</List.Item>
					<List.Item >
						<Button type="primary">下一步</Button>
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