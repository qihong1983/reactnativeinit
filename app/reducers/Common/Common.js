/**
 * create by xiaohong on 2018 / 08 / 03
 * reducers
 */
import * as TYPES from '../../ActionType';

const Common = (state, action) => {
	if (typeof state === "undefined") {
		return {
			assess_token: '',
			expires_in: '',
			expires_max: ''
		}
	}

	switch (action.type) {
		case TYPES.COMMON_ACCESS_TOKEN:
			return Object.assign({}, state, {
				assess_token: action.payload
			});
		case TYPES.COMMON_EXPIRES_IN:
			return Object.assign({}, state, {
				expires_in: action.payload
			});
		case TYPES.COMMON_EXPIRES_MAX:
			return Object.assign({}, state, {
				expires_max: action.payload
			});

		default:
			return state;
	}
}

export {
	Common
}