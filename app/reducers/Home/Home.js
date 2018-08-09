/**
 * create by xiaohong on 2018 / 08 / 03
 * reducers
 */
import * as TYPES from '../../ActionType';

const Home = (state, action) => {
	if (typeof state === "undefined") {
		return {
			tab_selected: 1,
			tab_data: []
		}
	}

	switch (action.type) {
		case TYPES.HOME_TAB_SELECTED:
			return Object.assign({}, state, {
				tab_selected: action.payload
			});
		case TYPES.HOME_TAB_DATA:
			return Object.assign({}, state, {
				tab_data: action.payload
			});
		default:
			return state;
	}
}

export {
	Home
}