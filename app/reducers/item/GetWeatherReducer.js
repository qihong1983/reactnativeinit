/**
 * create by AbyssKitty on 2017/12/06
 * reducers
 */
import * as TYPES from '../../ActionType';

const getWeather = (state, action) => {

	if (typeof state === "undefined") {
		return {
			status: 'init',
			isSuccess: false,
			bean: null,
			message: '',
		}
	}

	switch (action.type) {
		case TYPES.ACTION_GETWEATHER_INIT: // 初始状态
			return Object.assign({}, state, {
				status: 'init',
				isSuccess: false,
				bean: action.bean,
				message: action.message,
			});
			break;
		case TYPES.ACTION_GETWEATHER_SUCCESS: // 初始状态
			return Object.assign({}, state, {
				status: 'success',
				isSuccess: true,
				bean: action.bean,
				message: action.message,
			});
			break;
		default:
			return state;
	}
}

export {
	getWeather
}