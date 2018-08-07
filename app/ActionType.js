/**
 * create by AbyssKitty on 2018/01/18
 * 所有的Action的type的集合
 */

//export const LOGIN_DENGLU = 'login_denglu'; //初始化状态 
export const ACTION_GETWEATHER_INIT = 'action_getweather_init'; //
export const ACTION_GETWEATHER_SUCCESS = 'action_getweather_success'; //
export const TABBARSTATUS = 'tabbarstatus';

/**
 * 页面注册
 */
// 注册类型(mobile|email,必填)
export const REGISTER_TYPE = 'type'; //
// 国家ID(type:mobile时必填)
export const REGISTER_COUNTRY_ID = 'country_id'; //
// 手机号(type:mobile时必填)
export const REGISTER_MOBILE = 'mobile';
// 邮箱(type:email时必填;4-255位)
export const REGISTER_EMAIL = 'email';
// 验证码(必填,4-255位)
export const REGISTER_CODE = 'code';
// 密码(最小6位,必填)
export const REGISTER_PASSWORD = 'password';
// 重复密码(必填)
export const REGISTER_PASSWORD_CONFIRMATION = 'password_confirmation';
// 邀请码 （选填）
export const REGISTER_INVITE_CODE = 'invite_code';
// 来源（ 选填）
export const REGISTER_SOURCE = 'source';
// 国籍信息
export const REGISTER_COUNTRY_DATA = 'country_data';
// 手机号前缀
export const REGISTER_NUMBER_AREA = 'number_area';
// 验证码
export const REGISTER_VALID_TEXT = 'valid_text';

// 验证码
export const REGISTER_VALID_STATUS = 'valid_status';
// 读秒
export const REGISTER_VALID_SECOND = 'valid_second';