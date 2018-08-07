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
	initForm
}