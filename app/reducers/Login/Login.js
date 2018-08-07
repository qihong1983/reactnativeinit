/**
 * create by xiaohong on 2018 / 08 / 03
 * reducers
 */
import * as TYPES from '../../ActionType';

const Login = (state, action) => {
	if (typeof state === "undefined") {
		return {
			client_id: '2',
			client_secret: '0Xq3xPo255u69f01v1jWpzC7s15hr3AzjvLkCTZD',
			username: '',
			password: ''
		}
	}

	switch (action.type) {
		case TYPES.LOGIN_CLIENT_ID:
			return Object.assign({}, state, {
				client_id: action.payload
			});
		case TYPES.LOGIN_CLIENT_SECRET:
			return Object.assign({}, state, {
				client_secret: action.payload
			});
		case TYPES.LOGIN_USERNAME:
			return Object.assign({}, state, {
				username: action.payload
			});

		case TYPES.LOGIN_PASSWORD:
			return Object.assign({}, state, {
				password: action.payload
			});

		default:
			return state;
	}
}

export {
	Login
}