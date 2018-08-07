/**
 * create by xiaohong on 2018/08/03
 * reducers
 */
import * as TYPES from '../../ActionType';

import moment from 'moment';

import _ from 'lodash';

import {
	Button,
	Toast,
	WhiteSpace,
	WingBlank
} from 'antd-mobile-rn';

const toQueryString = (obj) => {
	return obj ? Object.keys(obj).sort().map(function(key) {
		var val = obj[key];
		if (Array.isArray(val)) {
			return val.sort().map(function(val2) {
				return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
			}).join('&');
		}
		return encodeURIComponent(key) + '=' + encodeURIComponent(val);
	}).join('&') : '';
}

/**
 * 输入用户名
 * @method inputUserName
 * @param data {String}
 */
const inputUserName = (data) => {
	return async function(dispatch) {
		await dispatch({
			type: TYPES.LOGIN_USERNAME,
			payload: data
		});
	}
}

/**
 * 输入密码
 * @method inputPassword
 * @param data {String}
 */
const inputPassword = (data) => {
	return function(dispatch) {
		dispatch({
			type: TYPES.LOGIN_PASSWORD,
			payload: data
		})
	}
}

/**
 * 点击提交
 * @method onSubmit
 */
const onSubmit = (data, navigation) => {
	return async function(dispatch) {
		let res = await fetch("http://api.tanghs.com/api/v1/token", {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data)
		});

		let json = await res.json();


		if (json.access_token == undefined) {
			Toast.fail('登录失败请检查用户名密码!');
		} else {

			await dispatch({
				type: TYPES.COMMON_ACCESS_TOKEN,
				payload: json.access_token
			});

			await dispatch({
				type: TYPES.COMMON_EXPIRES_IN,
				payload: json.expires_in
			});

			await dispatch({
				type: TYPES.COMMON_EXPIRES_MAX,
				payload: new Date().getTime() / 1000 + json.expires_in
			});

			Toast.success('登录成功');
			navigation.navigate('Main');
		}

	}
}

/**
 * 初始化表单
 * @method initForm
 */
const initForm = () => {
	return function(dispatch) {
		dispatch({
			type: TYPES.LOGIN_USERNAME,
			payload: ''
		});

		dispatch({
			type: TYPES.LOGIN_PASSWORD,
			payload: ''
		})
	}
}

export {
	//输入用户名
	inputUserName,
	//输入密码
	inputPassword,
	//点击表单提交
	onSubmit,
	//进入登录页初始化
	initForm
}