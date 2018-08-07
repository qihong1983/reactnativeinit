/**
 * create by xiaohong on 2018/08/03
 * reducers
 */
import * as TYPES from '../../ActionType';

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

//切换注册类型
const ChangeType = (index) => {
    return function(dispatch) {
        if (index == 0) {
            dispatch({
                type: TYPES.REGISTER_TYPE,
                payload: 'mobile'
            })
        } else {
            dispatch({
                type: TYPES.REGISTER_TYPE,
                payload: 'email'
            })
        }
    }
}

//初始化表单
const ResetForm = () => {
    return function(dispatch) {
        dispatch({
            type: TYPES.REGISTER_TYPE,
            payload: 'mobile'
        })

        dispatch({
            type: TYPES.REGISTER_MOBILE,
            payload: ''
        })

        dispatch({
            type: TYPES.REGISTER_COUNTRY_ID,
            payload: ["1"]
        })

        dispatch({
            type: TYPES.REGISTER_EMAIL,
            payload: ''
        })

        dispatch({
            type: TYPES.REGISTER_CODE,
            payload: ''
        })

        dispatch({
            type: TYPES.REGISTER_PASSWORD,
            payload: ''
        })

        dispatch({
            type: TYPES.REGISTER_PASSWORD_CONFIRMATION,
            payload: ''
        })

        dispatch({
            type: TYPES.REGISTER_INVITE_CODE,
            payload: ''
        })

        dispatch({
            type: TYPES.REGISTER_SOURCE,
            payload: ''
        })

        dispatch({
            type: TYPES.REGISTER_VALID_TEXT,
            payload: '获取验证码'
        });

        // dispatch({
        //     type: TYPES.REGISTER_VALID_SECOND,
        //     payload: 60
        // });

        // dispatch({
        //     type: TYPES.REGISTER_VALID_STATUS,
        //     payload: false
        // });

    }
}

// 拉国籍信息
const getCountryInfo = () => {
    return async function(dispatch) {

        let res = await fetch("http://api.tanghs.com/api/v1/country", {
            method: 'GET',
            mode: 'cors',
            cache: 'force-cache',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer xxx'
            }
        });

        let json = await res.json();


        if (json.status.code == 200) {
            await dispatch({
                type: TYPES.REGISTER_COUNTRY_DATA,

                payload: json.data
            })
        }
    }
}
//选中国家
const onChangePicker = (value) => {
    return async function(dispatch) {

        await dispatch({
            type: TYPES.REGISTER_COUNTRY_ID,
            payload: value
        });
    }
}

//电话前缀
const changeMobilePrefix = (value) => {
    return async function(dispatch) {
        await dispatch({
            type: TYPES.REGISTER_NUMBER_AREA,
            payload: '+' + value
        });
    }
}

const clickExtra = (data) => {
    return async function(dispatch) {

        await dispatch({
            type: TYPES.REGISTER_VALID_SECOND,
            payload: 60
        });

        let res = await fetch("http://api.tanghs.com/api/v1/send_validator_message", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        let json = await res.json();


        if (json.status.code == 200) {
            await dispatch({
                type: TYPES.REGISTER_VALID_STATUS,
                payload: true
            });
        } else {


            await dispatch({
                type: TYPES.REGISTER_VALID_STATUS,
                payload: false
            });

            Toast.fail(json.status.message);


        }

    }
}

const changePhone = (data) => {
    return async function(dispatch) {

        await dispatch({
            type: TYPES.REGISTER_MOBILE,
            payload: data
        })

    }
}

const readSecond = (data) => {
    return async function(dispatch) {
        await dispatch({
            type: TYPES.REGISTER_VALID_TEXT,
            payload: data + '秒重新发送'
        });
    }
}

const stopSecond = () => {
    return async function(dispatch) {
        await dispatch({
            type: TYPES.REGISTER_VALID_TEXT,
            payload: '获取验证码'
        });

        await dispatch({
            type: TYPES.REGISTER_VALID_SECOND,
            payload: 60
        });

        await dispatch({
            type: TYPES.REGISTER_VALID_STATUS,
            payload: false
        });
    }
}

// 输入密码 inputPassword
const inputPassword = (data) => {
    return function(dispatch) {

        dispatch({
            type: TYPES.REGISTER_PASSWORD,
            payload: data
        })
    }
}

// 确认密码 okPassword
const okPassword = (data) => {
    return function(dispatch) {

        dispatch({
            type: TYPES.REGISTER_PASSWORD_CONFIRMATION,
            payload: data
        })
    }
}


//请输入邀请码
const inputInviteCode = (data) => {
    return function(dispatch) {
        dispatch({
            type: TYPES.REGISTER_INVITE_CODE,
            payload: data
        })

    }
}

//提交表单
const onSubmit = (data, navigation) => {
    return async function(dispatch) {
        let res = await fetch("http://api.tanghs.com/api/v1/register", {
            method: 'POST',
            // body: toQueryString(data)
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        let json = await res.json();

        if (json.status.code != 200) {
            Toast.fail(json.data.message);
        } else {
            Toast.success('注册成功', 1);
            navigation.navigate('Login');
        }
    }
}

//输入验证码
const inputCode = (data) => {
    return function(dispatch) {
        dispatch({
            type: TYPES.REGISTER_CODE,
            payload: data
        })
    }
}

//输入email
const inputEmail = (v) => {
    return function(dispatch) {
        dispatch({
            type: TYPES.REGISTER_EMAIL,
            payload: data
        });
    }
}

export {
    //切换注册类型
    ChangeType,
    //进入注册页面初始化
    ResetForm,
    //拉国籍信息
    getCountryInfo,
    //选中国家
    onChangePicker,
    //手机号前缀（+86）
    changeMobilePrefix,
    //获取验证码
    clickExtra,
    //输入手机号
    changePhone,
    //读秒改文案
    readSecond,
    //禁止读秒
    stopSecond,
    //输入密码
    inputPassword,
    //确认密码
    okPassword,
    //请输入邀请码
    inputInviteCode,
    //验证码
    inputCode,
    //输入email
    inputEmail,
    //提交表单
    onSubmit
}