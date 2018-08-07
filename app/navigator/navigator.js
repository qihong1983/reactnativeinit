import React from 'react'
import {
	createStackNavigator
} from 'react-navigation'

import Main from '../page/Main';
import Redux1 from '../page/Redux1';
import Login from '../page/Login';
import UserCenter from '../page/UserCenter';
// 注册
import Register from '../page/Register';
// 找回密码
import ForgetPassword from '../page/ForgetPassword';

// 主页
import Home from '../page/Home';

export const AppNavigator = createStackNavigator({
	Main: {
		screen: Main
	},
	Redux1: {
		screen: Redux1
	},
	UserCenter: {
		screen: UserCenter,
		navigationOptions: ({navigation}) => ({
            title: '首页'
        })

	},
	Login: {
		screen: Login
	},
	Register: {
		screen: Register
	},
	ForgetPassword: {
		screen: ForgetPassword
	},
	Home: {
		screen: Home,
				navigationOptions: ({navigation}) => ({
            title: '首页'
        })
	}
});