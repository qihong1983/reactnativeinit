/**
 * create by AbyssKitty on 2017/12/06
 * 程序入口 通过包裹初始化
 */
import React, {
	Component
} from 'react';
import {
	Provider
} from 'react-redux';
import configureStore from './store/Store';
import {
	AppNavigator
} from './navigator/navigator';

const store = configureStore();

export default class Root extends Component {
	render() {
		return (
			<Provider store={store}>
            	<AppNavigator />
      		</Provider>
		);
	}
}