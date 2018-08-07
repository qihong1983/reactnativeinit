/**
 * create by AbyssKitty on 2017/09/22
 * 事件分发 总模块
 */

import {
	combineReducers
} from 'redux';
import {
	getWeather
} from './item/GetWeatherReducer';


//用户注册
import {
	Register
} from './register/Register';

//这里面必须要有初始数据 - 否则报错
const rootReducer = combineReducers({
	//GetWeatherReducer : GetWeatherReducer,
	getWeather,
	Register
});

export default rootReducer;