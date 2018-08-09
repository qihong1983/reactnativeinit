/**
 * create by xiaohong on 2018 / 08 / 03
 * reducers
 */
import * as TYPES from '../../ActionType';

const Main = (state, action) => {
	if (typeof state === "undefined") {
		return {
			selectTab: 'home'
		}
	}

	switch (action.type) {
		case TYPES.MAIN_SELECTEDTAB:
			return Object.assign({}, state, {
				selectTab: action.payload
			});

		default:
			return state;
	}
}

export {
	Main
}