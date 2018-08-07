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
 * 存储token
 * @method saveToken
 * @param data {String}
 */
const saveToken = (data) => {
	return async function(dispatch) {
		await dispatch({
			type: TYPES.LOGIN_USERNAME,
			payload: data
		});
	}
}



export {
	//存储token
	saveToken
}