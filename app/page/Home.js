import React from 'react';

//react-native 原生组件
import {
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	AppRegistry,
	Alert,
	StatusBar,
	ScrollView,
	WebView,
	ViewStyle,
	TextStyle,
	Dimensions,
	Image
} from 'react-native';



const {
	width,
	height
} = Dimensions.get('window');

//antd库
import {
	Button,
	TabBar,
	SearchBar,
	WhiteSpace,
	WingBlank,
	NoticeBar,
	Toast,
	Tabs
} from 'antd-mobile-rn';

//redux方法绑定
import {
	bindActionCreators
} from 'redux';

import {
	connect
} from 'react-redux';

//走马灯
import Carousel from 'react-native-looped-carousel';

let actionCreators = null;
import * as GetWeatherActions from '../actions/GetWeatherAction';
import * as MainActions from '../actions/Main/Main';
import * as HomeActions from '../actions/Home/Home';

actionCreators = Object.assign({}, GetWeatherActions, MainActions, HomeActions);

//本地存储
import StorageUtil from '../utils/StorageUtil';

//本地数据库
import Taffy from 'taffy';

import _ from 'lodash';


class Home extends React.Component {

	goHome = () => {
		this.props.navigation.navigate('ForgetPassword');
	}

	onHorizontalSelectedIndexChange(index: number) {
		/* tslint:disable: no-console */
		console.log('horizontal change to', index);
	}

	onVerticalSelectedIndexChange(index: number) {
		/* tslint:disable: no-console */
		console.log('vertical change to', index);
	}

	constructor(props) {
		super(props);

		this.state = {
			access_token: '',
			selfSelectionButtonShowHide: true,
			selfSelectionArr: []
		}
	}


	componentWillMount() {

		//删除token
		StorageUtil.remove('access_token');

		//获取access_token
		let res = StorageUtil.getString('access_token');

		res.then((str, err) => {
			this.setState({
				'access_token': str
			}, function() {
				//获取自选列表
				this.selfSelectionAll();
			}.bind(this));
		});

		res.catch(function(e) {
			if (e) {
				this.setState({
					'access_token': ''
				}, function() {
					//获取自选列表
					this.selfSelectionAll();
				}.bind(this));
			}
		}.bind(this))
		//拉数据
		this.props.getData();


	}



	/**
	 * 获取自选
	 * @method selfSelectionAll
	 */
	selfSelectionAll = () => {
		if (this.state.access_token) {
			console.log('调服务器接口');
		} else {
			this.localSelectAll();
		}

		console.log(this.state.access_token, 'this.state.access_token');

	}

	/**
	 * 本地存储list
	 * @method localSelectAll
	 */
	//todo
	localSelectAll = () => {
		//获取access_token
		let res = StorageUtil.getJsonObject('selfSelection');

		res.then((arr, err) => {

			console.log(!_.isEmpty(arr), '!_.isEmpty(arr)');
			if (!_.isEmpty(arr)) {
				this.setState({
					selfSelectionButtonShowHide: false,
					selfSelectionArr: arr
				});
			} else {
				this.setState({
					selfSelectionButtonShowHide: true,
					selfSelectionArr: []
				});
			}
		});

		res.catch(function(e) {
			if (e) {
				this.setState({
					selfSelectionButtonShowHide: true,
					selfSelectionArr: []
				});
			}
		}.bind(this))
	}



	/** 
	 * 切换tab
	 * @method onTabClick
	 * @param e {Object}
	 */
	onTabClick(e) {


		if (e.index == 4) {
			console.log('ok');
		} else {
			this.props.changeTab(e.index);
		}

	}


	/**
	 * 跳转到详情页
	 * @method goDetail
	 */
	goDetail = (e) => {

		console.log(e, '这里');
		console.log('去详情页面');
	}

	/**
	 * 填加自选，跳转到搜索页
	 * @method selfSelection
	 */
	selfSelection = () => {
		//todo 这里跳转到搜索页
		this.props.navigation.navigate('Search');
	}


	/**
	 * 搜索调整
	 * @method searchBtn
	 */
	searchBtn = () => {
		return (
			<View style={{width:450, height:50}}>
				<Text style={{width:50, height:50}}>搜索</Text>
			</View>
		)
	}

	/**
	 * 渲染ETH
	 * @method renderEth
	 */
	renderEth = () => {
		let items = [],
			renderItems = [];

		this.props.Home.tab_data.map((v, k) => {
			if (v.id == 9) {
				items = v.matchcoins;
			} else {
				return;
			}
		});


		items.map((v, k) => {
			renderItems.push(
				<TouchableHighlight key={k}  onPress={()=> this.goDetail(v.id)}>
					<View style={styles.tabContent}>
						{/*左侧开始*/}
						<View style={{paddingLeft: 20}}>
							<Text>{v.pageIdentifier}/ETH</Text>
							<Text>24H量 {v.hour24}</Text>
						</View>
						{/*左侧结束*/}
						<View>
							<Text>{v.price}</Text>
							<Text>￥{v.cny}</Text>
						</View>
						{/*左侧开始*/}
						<View style={{paddingRight:20}}>
							{this.renderButtonData(v.updown)}
						</View>
						{/*右侧结束*/}
					</View>
				</TouchableHighlight>
			);
		});


		return renderItems;
	}
	/**
	 * 渲染BTC
	 * @method renderBtc
	 */
	renderBtc = () => {
		let items = [],
			renderItems = [];

		this.props.Home.tab_data.map((v, k) => {
			if (v.id == 1) {
				items = v.matchcoins;
			} else {
				return;
			}
		});


		items.map((v, k) => {
			renderItems.push(
				<TouchableHighlight key={k} onPress={()=> this.goDetail(v.id)}>
					<View style={styles.tabContent}>
						{/*左侧开始*/}
						<View style={{paddingLeft: 20}}>
							<Text>{v.pageIdentifier}/BTC</Text>
							<Text>24H量 {v.hour24}</Text>
						</View>
						{/*左侧结束*/}
						<View>
							<Text>{v.price}</Text>
							<Text>￥{v.cny}</Text>
						</View>
						{/*左侧开始*/}
						<View style={{paddingRight:20}}>
							{this.renderButtonData(v.updown)}
						</View>
						{/*右侧结束*/}
					</View>
				</TouchableHighlight>
			);
		});


		return renderItems;
	}

	/**
	 * 渲染USDT
	 * @method renderUsdt
	 */
	renderUsdt = () => {

		let items = [],
			renderItems = [];

		this.props.Home.tab_data.map((v, k) => {
			if (v.id == 8) {
				items = v.matchcoins;
			} else {
				return;
			}
		});



		items.map((v, k) => {
			renderItems.push(
				<TouchableHighlight key={k} onPress={()=> this.goDetail(v.id)}>
					<View style={styles.tabContent}>
						{/*左侧开始*/}
						<View style={{paddingLeft: 20}}>
							<Text>{v.pageIdentifier}/USDT</Text>
							<Text>24H量 {v.hour24}</Text>
						</View>
						{/*左侧结束*/}
						<View>
							<Text>{v.price}</Text>
							<Text>￥{v.cny}</Text>
						</View>
						{/*左侧开始*/}
						<View style={{paddingRight:20}}>
							{this.renderButtonData(v.updown)}
						</View>
						{/*右侧结束*/}
					</View>
				</TouchableHighlight>
			);
		});

		return renderItems;
	}

	/**
	 * 判断按扭
	 * @method renderButtonData
	 */
	renderButtonData = (data) => {
		if (data >= 0) {
			return (
				<Button type="primary">+{data}%</Button>
			)
		} else {
			return (
				<Button type="warning">-{data}%</Button>
			)
		}
	}

	/**
	 * 本地自选列表
	 * @method getLocationSelfSelectionList
	 */
	getLocationSelfSelectionList = () => {

		let arr = [21, 12]

		let selfSelectionList = [];

		arr.map((v, k) => {
			console.log(k, v, '----');


		})

		if (this.state.selfSelectionButtonShowHide) {
			selfSelectionList = (<View style={[styles.tabContent,{justifyContent:'center'}]}>
						<Button type={'ghost'} onClick={()=> {this.selfSelection()}}>+ 添加 自选</Button>
					</View>);
		} else {

			selfSelectionList = (<TouchableHighlight onPress={()=> this.goDetail()}>
				<View style={styles.tabContent}>
					<Text>aaaaa</Text>
				</View>
			</TouchableHighlight>);
		}



		return selfSelectionList;
	}


	render() {

		const tabs = [{
			title: '自选',
			index: 0
		}, {
			title: 'USDT',
			index: 1
		}, {
			title: 'BTC',
			index: 2
		}, {
			title: 'ETH',
			index: 3
		}, {
			title: this.searchBtn(),
			index: 4
		}];


		//获取自选列表
		selfSelectionList = this.getLocationSelfSelectionList();

		return (
			<View style={{paddingBottom:45}}>
				{/*顶部轮播图开始*/}
				<View>
					<Carousel
	    				delay={2000}
	    				style={{width:width, height:width/2.04}}
	    				autoplay={false}    
	    				swiper      
	    				pageInfoBackgroundColor={'#fff'} 
	    				onAnimateNextPage={(p) => console.log(p)} 
	    				pageInfoTextStyle={{color:'blue'}}
	    				pageInfoTextSeparator={'!!!'}
					>
					 	<View>
			            	<Image
			            		style={{width:width, height:width/2.04}}
								source = {require('../assets/img/banner02.png')}
								resizeMode = "stretch"
							/>
	                    </View>
					 	<View>
			            	<Image
			            		style={{width:width, height:width/2.04}}
								source = {require('../assets/img/banner03.png')}
								resizeMode = "stretch"
							/>
	                    </View>
					 	<View>
			            	<Image
			            		style={{width:width, height:width/2.04}}
								source = {require('../assets/img/WechatIMG63.png')}
								resizeMode = "stretch"
							/>
	                    </View>
					</Carousel>
				</View>
				{/*顶部轮播图结束*/}

				{/*文字轮播图开始*/}
				<View>
					<Carousel
	    				delay={3000}  
	    				style={{width:width, height:50}} 
	    				autoplay={false}
	    				swiper      
	    				pageInfoBackgroundColor={'#fff'} 
	    				onAnimateNextPage={(p) => console.log(p)} 
	    				pageInfoTextStyle={{color:'blue'}}     
	    				pageInfoTextSeparator={'!!!'}
	    				arrows={true}
	    				leftArrowText="left️"
	    				arrowsStyle={{margin:-10, padding:0}}
	    				rightArrowText="right"
	    				arrowsContainerStyle={{paddingHorizontal:20}}
					>
					 	<View style={{width:width, height:50, backgroundColor: 'white'}}>
			            	<Text>Text111</Text>
	                    </View>
					 	<View style={{width:width, height:50, backgroundColor: 'white'}}>
			            	<Text>Text222</Text>
	                    </View>
					 	<View style={{width:width, height:50, backgroundColor: 'white'}}>
			            	<Text>Text333</Text>
	                    </View>
					</Carousel>
				</View>
				{/*文字轮播图结束*/}
				{/*我的资产开始*/}
				<View style={{height:50, backgroundColor: 'white'}}>
					<Text>我的资产</Text>
					
				</View>
				{/*我的资产结束*/}
				{/*tab标签开始*/}
			    <View style={{ width:width, height:400}}>
			        <View style={{ flex: 1}}>
				        <Tabs tabs={tabs} 
				        	initialPage={this.props.Home.tab_selected}
				        	page={this.props.Home.tab_selected}
				        	activeTab={1}
				        	onChange={this.onTabClick.bind(this)}
				        	onTabClick={this.onTabClick.bind(this)}
				        	swipeable={false}
				        	style={{paddingBottom:60}}
				        >
				        	<ScrollView>
					        	{selfSelectionList}
							</ScrollView>
							{/*渲染USDT列表开始*/}
							<ScrollView>
								{this.renderUsdt()}
							</ScrollView>
							{/*渲染USDT列表结束*/}
							{/*BTC渲染列表开始*/}
							<ScrollView>
								{this.renderBtc()}
							</ScrollView>
							{/*BTC渲染列表结束*/}
							{/*ETH渲染列表开始*/}
							<ScrollView>
								{this.renderEth()}
							</ScrollView>
							{/*ETH渲染列表结束*/}
				        </Tabs>
			        </View>
			    </View> 
				{/*tab标签结束*/}
				<Text onPress = {() => {this.goHome()}}>
					首页
				</Text>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	tabWrap: {
		alignItems: 'center',
		justifyContent: 'center',
		height: 150,
		backgroundColor: '#fff',
	},

	tabContent: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 60,
		backgroundColor: '#fff',
		borderBottomWidth: 1,
		borderBottomColor: '#e5e5e5'
	}
});


const mapStateToProps = (state) => {
	return {
		GetWeatherReducer: state.getWeather,
		Main: state.Main,
		Home: state.Home
	}
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
	//全量
	return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);