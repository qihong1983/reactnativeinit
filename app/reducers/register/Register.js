/**
 * create by xiaohong on 2018 / 08 / 03
 * reducers
 */
import * as TYPES from '../../ActionType';

const Register = (state, action) => {
	if (typeof state === "undefined") {
		return {
			type: 'mobile',
			mobile: '',
			country_id: ["1"],
			email: '',
			code: '',
			password: '',
			password_confirmation: '',
			invite_code: '',
			source: '',
			country_data: [{
				add_hour: 8,
				id: 1,
				key: "china",
				mobile_prefix: "86",
				name: "中国",
				timezone: "UTC/GMT+08:00"
			}],
			number_area: '+86',
			valid_text: '获取验证码',
			valid_status: false,
			valid_second: 60
		}
	}

	switch (action.type) {
		case TYPES.REGISTER_TYPE:
			return Object.assign({}, state, {
				type: action.payload
			});
		case TYPES.REGISTER_MOBILE:
			return Object.assign({}, state, {
				mobile: action.payload
			});
		case TYPES.REGISTER_COUNTRY_ID:
			return Object.assign({}, state, {
				country_id: action.payload
			});
		case TYPES.REGISTER_EMAIL:
			return Object.assign({}, state, {
				email: action.payload
			});
		case TYPES.REGISTER_CODE:
			return Object.assign({}, state, {
				code: action.payload
			});
		case TYPES.REGISTER_PASSWORD:
			return Object.assign({}, state, {
				password: action.payload
			});
		case TYPES.REGISTER_PASSWORD_CONFIRMATION:
			return Object.assign({}, state, {
				password_confirmation: action.payload
			});
		case TYPES.REGISTER_INVITE_CODE:
			return Object.assign({}, state, {
				invite_code: action.payload
			});
		case TYPES.REGISTER_SOURCE:
			return Object.assign({}, state, {
				source: action.payload
			});

		case TYPES.REGISTER_COUNTRY_DATA:
			return Object.assign({}, state, {
				country_data: action.payload
			});

		case TYPES.REGISTER_NUMBER_AREA:
			return Object.assign({}, state, {
				number_area: action.payload
			});


		case TYPES.REGISTER_VALID_TEXT:
			return Object.assign({}, state, {
				valid_text: action.payload
			});

		case TYPES.REGISTER_VALID_STATUS:
			return Object.assign({}, state, {
				valid_status: action.payload
			});

		case TYPES.REGISTER_VALID_SECOND:
			return Object.assign({}, state, {
				valid_second: action.payload
			});

		default:
			return state;
	}

}

export {
	Register
}